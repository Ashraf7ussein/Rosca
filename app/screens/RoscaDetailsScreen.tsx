import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppModal from "../components/AppModal";
import AppText from "../components/AppText";
import CircularIcon from "../components/CircularIcon";
import FooterButton from "../components/FooterButton";
import MembersList from "../components/MembersList";
import OptionItem from "../components/OptionItem";
import RoscaCard from "../components/RoscaCard";
import Screen from "../components/Screen";
import TabContainer from "../components/TabContainer";
import UsersBadge from "../components/UsersBadge";
import colors from "../config/colors";
import PriceTag from "../components/PriceTag";
import { Payment, Member, Rosca } from "../../types";
import apiClient from "../services/apiClient";
import { useAuth } from "../services/authContext";
import Spinner from "../components/Spinner";
import { RouteProp } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import useAppNavigation, {
  RootStackParamList,
} from "../hooks/useAppNavigation";

interface Props {
  route: RouteProp<RootStackParamList, "RoscaDetailsScreen">;
}

const RoscaDetailsScreen = ({ route }: Props) => {
  const [selectedTab, setSelectedTab] = useState("accepted");
  const [modalVisible, setModalVisibility] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [modalType, setModalType] = useState("options");
  const [closeVisible, setCloseVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [rosca, setRosca] = useState(route.params.rosca);
  const { user } = useAuth();

  const handleButtonClick = async () => {
    if (rosca.roscaStatus === "pending") {
      const roscaId = rosca._id;
      setLoading(true);
      try {
        const res = await apiClient.put(`/status/${roscaId}`, {
          status: "active",
        });

        setRosca(res.data.rosca);
        setLoading(false);
        Toast.show({
          type: "success",
          text1: "Rosca Activated Successfully",
        });
      } catch (err: any) {
        setLoading(false);
        Toast.show({
          type: "error",
          text1: "Error  while activating rosca",
          text2: err.message || "Please try again",
        });
      }
    } else {
      if (!user) {
        console.warn("User not authenticated");
        return;
      }

      const currentMember = rosca.membersArray.find((m) => m.id === user.id);

      if (!currentMember) {
        console.warn("Current user is not part of this Rosca");
        return;
      }

      navigation.navigate("PaymentsScreen", {
        roscaId: rosca._id,
        roscaName: rosca.name,
        payments: currentMember.payments,
        monthlyAmount: rosca.monthlyAmount,
      });
    }
  };

  const handleCloseRosca = async () => {
    setLoading(true);
    try {
      const res = await apiClient.put(`/close/${rosca._id}`);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (memberId: string) => {
    setLoading(true);
    try {
      await apiClient.delete(`/members/${rosca._id}/${memberId}`);
      setRosca((prevRosca: Rosca) => ({
        ...prevRosca,
        membersArray: prevRosca.membersArray.filter((m) => m._id !== memberId),
      }));
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "Error  while deleting member",
        text2: error.message || "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMemberStatus = async (status: string, member: Member) => {
    setLoading(true);
    try {
      const res = await apiClient.put(
        `/members/${rosca._id}/${member._id}/status`,
        { status }
      );
      const updatedMember = res.data.member;

      setRosca((prevRosca: Rosca) => ({
        ...prevRosca,
        membersArray: prevRosca.membersArray.map((m) =>
          m._id === member._id ? { ...m, ...updatedMember } : m
        ),
      }));
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error  while updating member status",
        text2: error.message || "Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  const navigation = useAppNavigation();

  return (
    <Screen>
      <Spinner visible={isLoading} />
      <View style={{ flex: 1 }}>
        <RoscaCard
          rosca={rosca}
          showEditButton
          onEdit={() => navigation.navigate("FormScreen", { rosca })}
        />

        <View style={styles.container}>
          <AppText style={styles.text}>Members</AppText>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalType("options");
                setModalVisibility(true);
              }}
            >
              <CircularIcon size={20} name="dots-horizontal" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MembersScreen", {
                  members: rosca.membersArray,
                });
              }}
            >
              <CircularIcon size={20} name="head" />
            </TouchableOpacity>
          </View>
        </View>

        <TabContainer
          onPress={(tab) => setSelectedTab(tab)}
          selectedTab={selectedTab}
          tabs={[
            { label: "Accepted", value: "accepted" },
            { label: "Waiting Approval", value: "waiting" },
          ]}
        />

        <MembersList
          handleDelete={handleDelete}
          membersArray={rosca.membersArray}
          selectedTab={selectedTab}
          onSelectMember={(member) => {
            setModalType("userDetails");
            setSelectedMember(member);
            setModalVisibility(true);
          }}
          handleMemberStatus={handleMemberStatus}
        />

        {modalVisible && modalType === "options" && (
          <AppModal
            onClose={() => {
              setModalVisibility(false);
              setCloseVisible(false);
            }}
          >
            {closeVisible ? (
              <View style={{ gap: 10 }}>
                <AppText
                  style={styles.closeText}
                >{`Are you sure you want to close ${rosca.name}? This action can not be undone`}</AppText>
                <FooterButton
                  backgroundColor={colors.danger}
                  disabled={selectedTab === "waiting"}
                  onPress={handleCloseRosca}
                >
                  Close Rosca
                </FooterButton>
                <FooterButton
                  backgroundColor={colors.secondary}
                  onPress={() => {
                    setCloseVisible(false);
                    setModalVisibility(false);
                  }}
                >
                  Cancel
                </FooterButton>
              </View>
            ) : (
              <>
                <OptionItem
                  text="Invite Member"
                  iconName="account-arrow-right"
                  onPress={() => {
                    navigation.navigate("InviteScreen", {
                      invitationCode: rosca.invitationCode,
                    });
                    setModalVisibility(false);
                  }}
                />
                <OptionItem
                  text="Change Admin"
                  iconName="arrow-u-right-top-bold"
                  onPress={() => {
                    setModalVisibility(false);
                  }}
                />
                <OptionItem
                  text="Stop Rosca"
                  iconName="alpha-x-circle-outline"
                  onPress={() => {
                    setCloseVisible(true);
                  }}
                />
              </>
            )}
          </AppModal>
        )}

        {modalVisible && modalType === "userDetails" && selectedMember && (
          <AppModal onClose={() => setModalVisibility(false)}>
            <AppText style={styles.userName}>{selectedMember.name}</AppText>
            <View style={styles.userPaymentsCard}>
              <AppText style={styles.paymentText}>Total Payments</AppText>
              <PriceTag amount={selectedMember.totalPayments} size={40} />
            </View>
            <View style={styles.grid}>
              {selectedMember.payments.map(
                (payment: Payment, index: number) => (
                  <View style={styles.dateContainer} key={index}>
                    <AppText style={styles.date}>
                      {new Date(payment.month).toLocaleDateString("en-US", {
                        month: "long",
                      })}
                    </AppText>
                    <UsersBadge label={payment.paymentStatus} />
                  </View>
                )
              )}
            </View>
          </AppModal>
        )}
      </View>

      <View style={styles.footer}>
        <FooterButton
          disabled={selectedTab === "waiting"}
          onPress={handleButtonClick}
        >
          {rosca.roscaStatus === "pending" ? "Start Rosca" : "Show my payments"}
        </FooterButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  tabText: {
    fontSize: 18,
    color: colors.bodyText,
  },
  activeTabText: {
    fontWeight: "bold",
    color: colors.primary,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.medium,
    paddingTop: 20,
  },
  userName: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  userPaymentsCard: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4, // For Android shadow
    marginBottom: 25,
  },
  paymentText: {
    fontSize: 18,
    color: colors.dark,
    textTransform: "uppercase",
  },
  date: {
    fontSize: 18,
    color: colors.medium,
    marginBottom: 8,
  },
  dateContainer: {
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 12,
  },
  closeText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
  },
});

export default RoscaDetailsScreen;

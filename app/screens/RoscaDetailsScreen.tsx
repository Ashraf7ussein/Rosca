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
import Payment, { RootStackParamList } from "../../types";
import Member from "../../types";
import apiClient from "../services/apiClient";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAuth } from "../services/authContext";

const RoscaDetailsScreen = ({ route }) => {
  const [selectedTab, setSelectedTab] = useState("accepted");
  const [modalVisible, setModalVisibility] = useState(false);
  const [modalType, setModalType] = useState("options");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [rosca, setRosca] = useState(route.params.rosca);
  const { user } = useAuth();

  const handleButtonClick = async () => {
    if (rosca.roscaStatus === "pending") {
      const roscaId = rosca._id;
      try {
        const res = await apiClient.post("/api/roscas/rosca/status", {
          roscaId,
          action: "start",
        });
        setRosca(res.data.roscaObject);
      } catch (err) {
        console.log(err);
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
        payments: currentMember.payments,
      });
    }
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <RoscaCard rosca={rosca} showEditButton />

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
            <TouchableOpacity>
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
          membersArray={rosca.membersArray}
          selectedTab={selectedTab}
          onSelectMember={(member) => {
            setModalType("userDetails");
            setSelectedMember(member);
            setModalVisibility(true);
          }}
        />

        {modalVisible && modalType === "options" && (
          <AppModal onClose={() => setModalVisibility(false)}>
            <OptionItem />
            <OptionItem />
            <OptionItem />
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
    justifyContent: "space-between",
    gap: 12,
  },
});

export default RoscaDetailsScreen;

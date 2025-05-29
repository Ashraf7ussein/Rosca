import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppModal from "../components/AppModal";
import AppText from "../components/AppText";
import CircularIcon from "../components/CircularIcon";
import FooterButton from "../components/FooterButton";
import RoscaCard from "../components/RoscaCard";
import Screen from "../components/Screen";
import UserDetails from "../components/UserDetails";
import UserDetails2 from "../components/UserDetails2";
import colors from "../config/colors";
import OptionItem from "../components/OptionItem";
import UsersBadge from "../components/UsersBadge";

const RoscaDetailsScreen = () => {
  const [selectedTab, setSelectedTab] = useState("accepted");
  const [modalVisible, setModalVisibility] = useState(false);
  const [modalType, setModalType] = useState("options");

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <RoscaCard
          name="Test"
          badgeLabel="closed"
          endingDate="1/1/2026"
          startingDate="1/1/2025"
          monthlyAmount="25 JD"
          totalAmount="500 JD"
          showEditButton
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
            <TouchableOpacity>
              <CircularIcon size={20} name="head" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setSelectedTab("accepted")}>
            <AppText
              style={{
                fontSize: 18,
                fontWeight: selectedTab === "accepted" ? "bold" : "normal",
                color:
                  selectedTab === "accepted" ? colors.primary : colors.bodyText,
              }}
            >
              Accepted
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedTab("waiting")}>
            <AppText
              style={{
                fontSize: 18,
                fontWeight: selectedTab === "waiting" ? "bold" : "normal",
                color:
                  selectedTab === "waiting" ? colors.primary : colors.bodyText,
              }}
            >
              Waiting Approval
            </AppText>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {selectedTab === "accepted" ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setModalType("userDetaisl");
                  setModalVisibility(true);
                }}
              >
                <UserDetails
                  name="this is th ena"
                  date="asdlashd"
                  badgeLabel="unpaid"
                  order="1"
                />
              </TouchableOpacity>
              <UserDetails
                name="email"
                date="MAy"
                badgeLabel="nextpay"
                order="2"
              />
              <UserDetails name="name" date="oct" badgeLabel="paid" order="3" />
            </>
          ) : (
            <>
              <UserDetails2 name="this is th ena" />
              <UserDetails2 name="email" />
            </>
          )}
        </ScrollView>
        {modalVisible && modalType === "options" && (
          <AppModal onClose={() => setModalVisibility(false)}>
            <OptionItem />
            <OptionItem />
            <OptionItem />
          </AppModal>
        )}
        {modalVisible && modalType === "userDetaisl" && (
          <AppModal onClose={() => setModalVisibility(false)}>
            <AppText style={styles.userName}>Name NAme</AppText>
            <View style={styles.userPaymentsCard}>
              <AppText style={styles.paymentText}>Total Payments</AppText>
              <AppText style={styles.price}>200.00 JOD</AppText>
            </View>
            <View style={styles.grid}>
              <View style={styles.dateContainer}>
                <AppText style={styles.date}>APR</AppText>
                <UsersBadge label="nextpay" />
              </View>
              <View style={styles.dateContainer}>
                <AppText style={styles.date}>APR</AppText>
                <UsersBadge label="nextpay" />
              </View>
              <View style={styles.dateContainer}>
                <AppText style={styles.date}>APR</AppText>
                <UsersBadge label="nextpay" />
              </View>
              <View style={styles.dateContainer}>
                <AppText style={styles.date}>APR</AppText>
                <UsersBadge label="nextpay" />
              </View>
              <View style={styles.dateContainer}>
                <AppText style={styles.date}>APR</AppText>
                <UsersBadge label="nextpay" />
              </View>
              <View style={styles.dateContainer}>
                <AppText style={styles.date}>APR</AppText>
                <UsersBadge label="nextpay" />
              </View>
            </View>
          </AppModal>
        )}
      </View>

      <View style={styles.footer}>
        <FooterButton disabled={selectedTab === "waiting"} onPress={() => {}}>
          Start Rosca
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
    marginBottom: 5,
    textTransform: "uppercase",
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 30,
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

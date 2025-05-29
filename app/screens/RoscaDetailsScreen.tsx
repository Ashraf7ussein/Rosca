import React from "react";
import { View, StyleSheet } from "react-native";
import RoscaCard from "../components/RoscaCard";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import CircularIcon from "../components/CircularIcon";
import UsersBadge from "../components/UsersBadge";

const RoscaDetailsScreen = () => {
  return (
    <Screen>
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
          <CircularIcon size={20} name="dots-horizontal" />
          <CircularIcon size={20} name="head" />
        </View>
      </View>
      <View>
        <UsersBadge label="paid" />
        <UsersBadge label="unpaid" />
        <UsersBadge label="nextpay" />
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
  },
  iconsContainer: {
    flexDirection: "row",
    gap: "8",
  },
});
export default RoscaDetailsScreen;

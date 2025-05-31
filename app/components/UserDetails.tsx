import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import AppText from "./AppText";
import OrderCircle from "./OrderCircle";
import UsersBadge from "../components/UsersBadge";
import colors from "../config/colors";
import Member from "../../types";

interface Props {
  member: Member;
  onPress: () => void;
}

const UserDetails = ({ member, onPress }: Props) => {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const assignedMonth = new Date(member.assignedDate).toLocaleDateString(
    "en-US",
    { month: "long" }
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftDetails}>
          <FontAwesome6 name="bars" size={20} color={colors.medium} />

          <View>
            <OrderCircle order={member.memberOrder} />
            <View style={[styles.user, member.isAdmin && styles.adminUser]}>
              <AppText style={styles.userLogo}>{initials}</AppText>
            </View>
          </View>

          <View>
            <AppText style={styles.username}>{member.name}</AppText>
            <AppText style={styles.date}>{assignedMonth}</AppText>
          </View>
        </View>

        <UsersBadge label={member.memberPaymentStatus} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftDetails: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  date: {
    fontSize: 15,
    color: colors.dark,
    textTransform: "uppercase",
  },
  user: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginLeft: -8,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.medium,
    alignItems: "center",
    justifyContent: "center",
    top: -10,
  },
  userLogo: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  adminUser: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
  },
});

export default UserDetails;

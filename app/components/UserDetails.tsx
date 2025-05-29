import React from "react";
import { View, StyleSheet } from "react-native";
import UsersBadge from "../components/UsersBadge";
import colors from "../config/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AppText from "./AppText";
import OrderCircle from "./OrderCircle";

interface Props {
  name: string;
  date: string;
  badgeLabel: string;
  order: string;
}

const UserDetails = ({ name, date, badgeLabel, order }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftDetails}>
        <FontAwesome6 name="bars" size={20} color={colors.medium} />
        <View>
          <OrderCircle order={order} />
          <View style={styles.userImage} />
        </View>
        <View>
          <AppText style={styles.username}>{name}</AppText>
          <AppText style={styles.date}>{date}</AppText>
        </View>
      </View>

      <UsersBadge label={badgeLabel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
  },
  leftDetails: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: 500,
    textTransform: "capitalize",
  },
  date: {
    fontSize: 15,
    color: colors.dark,
    textTransform: "uppercase",
  },
});

export default UserDetails;

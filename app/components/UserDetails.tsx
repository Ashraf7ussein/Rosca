import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import UsersBadge from "../components/UsersBadge";
import colors from "../config/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AppText from "./AppText";
import OrderCircle from "./OrderCircle";

interface Member {
  name: string;
  date: string;
  badgeLabel: string;
  memberOrder: string;
  onPress: () => void;
}

const UserDetails = ({
  name,
  date,
  badgeLabel,
  memberOrder,
  onPress,
}: Member) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftDetails}>
          <FontAwesome6 name="bars" size={20} color={colors.medium} />
          <View>
            <OrderCircle order={memberOrder} />
            <View style={styles.userImage} />
          </View>
          <View>
            <AppText style={styles.username}>{name}</AppText>
            <AppText style={styles.date}>{date}</AppText>
          </View>
        </View>

        <UsersBadge label={badgeLabel} />
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

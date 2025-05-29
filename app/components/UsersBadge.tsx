import React, { ComponentProps } from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CircularIcon from "./CircularIcon";

interface Props {
  label: string;
}

const UsersBadge = ({ label }: Props) => {
  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor:
            label === "paid"
              ? colors.activeLight
              : label === "unpaid"
              ? colors.dangerLight
              : colors.primaryLigh,
        },
      ]}
    >
      <CircularIcon
        size={12}
        name={
          label === "paid"
            ? "check-bold"
            : label === "unpaid"
            ? "close-thick"
            : "arrow-right-thick"
        }
        color={
          label === "paid"
            ? colors.active
            : label === "unpaid"
            ? colors.danger
            : colors.primary
        }
      />

      <AppText style={styles.text}>{label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "500",
  },
});

export default UsersBadge;

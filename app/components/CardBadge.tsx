import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

interface Props {
  badgeLabel: string;
}

const CardBadge = ({ badgeLabel = "pending" }: Props) => {
  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: colors[badgeLabel as keyof typeof colors] },
      ]}
    >
      <AppText style={styles.label}>{badgeLabel}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 14,
    color: colors.black,
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
    opacity: 0.8,
  },
  label: {
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "500",
  },
});

export default CardBadge;

import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

interface Props {
  roscaStatus: string;
}

const CardBadge = ({ roscaStatus = "pending" }: Props) => {
  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: colors[roscaStatus as keyof typeof colors] },
      ]}
    >
      <AppText style={styles.label}>{roscaStatus}</AppText>
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

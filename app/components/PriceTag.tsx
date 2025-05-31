import React from "react";
import AppText from "./AppText";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

interface PriceTagProps {
  amount: number | string;
  currency?: string;
  size?: number;
}

const PriceTag = ({ amount, size = 10, currency = "jod" }: PriceTagProps) => {
  const [intPart, decimalPart] = parseFloat(amount.toString())
    .toFixed(2)
    .split(".");

  return (
    <View style={styles.container}>
      <AppText style={[styles.intPart, { fontSize: size }]}>{intPart}</AppText>
      <AppText style={[styles.priceDecimal, { fontSize: size / 2 }]}>
        .{decimalPart}
      </AppText>
      <AppText style={styles.currency}>{currency}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  intPart: {
    fontWeight: "bold",
    color: colors.primary,
    top: 13,
  },
  priceDecimal: {
    fontWeight: "bold",
    color: colors.primary,
  },
  currency: {
    fontSize: 16,
    textTransform: "uppercase",
    color: colors.dark,
    marginLeft: 4,
  },
});

export default PriceTag;

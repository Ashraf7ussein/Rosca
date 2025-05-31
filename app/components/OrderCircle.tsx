import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

interface Props {
  order: string;
}

const OrderCircle = ({ order }: Props) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{order}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.black,
    top: 5,
    right: -30,
    zIndex: 10,
    borderWidth: 1,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.white,
  },
});

export default OrderCircle;

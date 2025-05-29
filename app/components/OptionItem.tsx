import React from "react";
import { View, StyleSheet } from "react-native";
import CircularIcon from "./CircularIcon";
import AppText from "./AppText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "../config/colors";

const OptionItem = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.container, { gap: 15 }]}>
        <CircularIcon name="check-bold" size={35} />
        <AppText>dasdasd</AppText>
      </View>
      <MaterialIcons name="arrow-forward-ios" size={15} color={colors.medium} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default OptionItem;

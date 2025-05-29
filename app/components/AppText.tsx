import React from "react";
import { Text, StyleSheet, TextStyle, Platform } from "react-native";
import colors from "../config/colors";

interface Props {
  children: React.ReactNode;
  style?: TextStyle;
}

const AppText = ({ children, style }: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: colors.bodyText,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;

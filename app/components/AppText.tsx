import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

interface Props {
  children: String;
}

const AppText = ({ children }: Props) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: colors.bodyText,
  },
});

export default AppText;

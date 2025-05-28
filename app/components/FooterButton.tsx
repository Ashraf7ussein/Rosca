import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

interface Props {
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
}

const FooterButton = ({
  children,
  backgroundColor = colors.primary,
  textColor = colors.white,
}: Props) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
    borderRadius: 20,
  },
  text: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default FooterButton;

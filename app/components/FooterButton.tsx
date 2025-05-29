import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../config/colors";

interface Props {
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onPress: () => void;
}

const FooterButton = ({
  children,
  backgroundColor = colors.primary,
  textColor = colors.white,
  onPress,
}: Props) => {
  return (
    <TouchableHighlight
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  text: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default FooterButton;

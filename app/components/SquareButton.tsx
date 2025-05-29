import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../config/colors";

interface Props {
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onPress: () => void;
}

const SquareButton = ({
  children,
  backgroundColor = colors.primary,
  onPress,
}: Props) => {
  return (
    <TouchableHighlight
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              backgroundColor === colors.primary ? colors.white : colors.black,
          },
        ]}
      >
        {children}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 7,
  },
  text: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default SquareButton;

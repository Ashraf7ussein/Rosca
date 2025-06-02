import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

interface Props {
  backgroundColor?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onPress: () => void;
}

const FooterButton = ({
  children,
  backgroundColor = colors.primary,
  disabled = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        { backgroundColor, opacity: disabled ? 0.5 : 1 },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color:
              backgroundColor === colors.primary ||
              backgroundColor === colors.danger
                ? colors.white
                : colors.black,
          },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
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

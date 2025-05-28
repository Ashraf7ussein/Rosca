import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import colors from "../config/colors";

interface Props {
  label: string;
  placeholder: string;
}

const AppTextInput = ({ label, placeholder }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: "100%",
    padding: 20,
    borderRadius: 15,
  },
  label: {
    fontSize: 14,
    color: colors.secondary,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  container: {
    marginBottom: 22,
  },
});

export default AppTextInput;

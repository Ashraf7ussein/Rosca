import React from "react";
import Screen from "../components/Screen";
import FooterButton from "../components/FooterButton";
import { View, StyleSheet, TextInput, Text } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";

const FormScreen = () => {
  return (
    <Screen>
      <View style={styles.content}>
        <AppText>Create Rosca</AppText>
        <AppTextInput label="Rosca Name" placeholder="Ex: Neighborhood" />
        <AppTextInput label="Members Count" placeholder="5" />
        <AppTextInput label="Monthly Amount" placeholder="Ex: 50 JOD" />
        <AppTextInput label="Starting Date" placeholder="YYYY/MM" />
        <AppTextInput label="Ending Date" placeholder="YYYY/MM" />
      </View>
      <FooterButton>Confirm</FooterButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default FormScreen;

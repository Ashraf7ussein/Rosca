import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import FooterButton from "../components/FooterButton";
import colors from "../config/colors";

const EnterScreen = () => {
  return (
    <Screen>
      <View style={styles.content}>
        <AppText>You don’t have any Rosca’s Yet</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <FooterButton onPress={() => {}}>Create Rosca</FooterButton>
        <FooterButton backgroundColor={colors.secondary} onPress={() => {}}>
          Join Rosca
        </FooterButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    gap: 10,
  },
});

export default EnterScreen;

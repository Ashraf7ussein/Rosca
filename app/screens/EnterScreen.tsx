import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import FooterButton from "../components/FooterButton";

const EnterScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.content}>
          <AppText>You don’t have any Rosca’s Yet</AppText>
        </View>
        <FooterButton onPress={() => {}}>Create Rosca</FooterButton>
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
});

export default EnterScreen;

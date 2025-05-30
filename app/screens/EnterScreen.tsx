import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import FooterButton from "../components/FooterButton";
import colors from "../config/colors";

const EnterScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.content}>
        <AppText>You don’t have any Rosca’s Yet</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <FooterButton
          onPress={() => {
            navigation.navigate("Create Rosca");
          }}
        >
          Create Rosca
        </FooterButton>
        <FooterButton
          backgroundColor={colors.secondary}
          onPress={() => {
            navigation.navigate("Join Rosca");
          }}
        >
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
  buttonsContainer: {
    gap: 10,
  },
});

export default EnterScreen;

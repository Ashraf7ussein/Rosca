import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import FooterButton from "../components/FooterButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useAppNavigation from "../hooks/useAppNavigation";

const EnterScreen = () => {
  const navigation = useAppNavigation();

  return (
    <Screen>
      <View style={styles.content}>
        <AppText>You don’t have any Rosca’s Yet</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <FooterButton onPress={() => navigation.navigate("FormScreen")}>
          Create Rosca
        </FooterButton>
        <FooterButton
          backgroundColor={colors.secondary}
          onPress={() => {
            navigation.navigate("Join");
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

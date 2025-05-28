import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import FooterButton from "../components/FooterButton";
import colors from "../config/colors";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppText>You don’t have any Rosca’s Yet!</AppText>
      </View>
      <FooterButton backgroundColor={colors.primary}>Create Rosca</FooterButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default HomeScreen;

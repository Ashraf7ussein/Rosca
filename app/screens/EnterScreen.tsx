import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import FooterButton from "../components/FooterButton";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const EnterScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Screen>
      <View style={styles.content}>
        <AppText>You don’t have any Rosca’s Yet</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <FooterButton onPress={() => navigation.navigate("Create")}>
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

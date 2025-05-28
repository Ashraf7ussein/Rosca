import React from "react";
import Screen from "../components/Screen";
import { Text, View, StyleSheet } from "react-native";
import FooterButton from "../components/FooterButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InviteScreen = () => {
  return (
    <Screen>
      <View style={styles.content}>
        <AppText>Invite you freinds!</AppText>
        <Text style={styles.text}>
          SHARE THE QR CODE WITH YOUR FRIENDS TO INVITE THEM TO THE ROSCA
        </Text>
        <View style={styles.qrCode} />
        <Text style={styles.text}>Invite Code</Text>
        <View style={styles.codeContainer}>
          <Text>1151515</Text>
          <MaterialCommunityIcons
            name="content-copy"
            color={colors.medium}
            size={20}
          />
        </View>
      </View>
      <View style={styles.bottonsContainer}>
        <FooterButton>Done</FooterButton>
        <FooterButton
          backgroundColor={colors.secondary}
          textColor={colors.black}
        >
          Share
        </FooterButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  bottonsContainer: {
    gap: 10,
  },
  content: {
    flex: 1,
  },
  text: {
    color: colors.medium,
    fontSize: 14,
  },
  qrCode: {
    width: 200,
    height: 200,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.black,
    alignSelf: "center",
    marginTop: 45,
    marginBottom: 25,
  },
  codeContainer: {
    backgroundColor: colors.white,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default InviteScreen;

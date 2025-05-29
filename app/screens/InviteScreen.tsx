import React from "react";
import Screen from "../components/Screen";
import { Text, View, StyleSheet } from "react-native";
import FooterButton from "../components/FooterButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const InviteScreen = () => {
  return (
    <Screen>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <AppText>Invite you freinds!</AppText>
          <FontAwesome name="share-alt" size={20} color={colors.medium} />
        </View>
        <AppText style={styles.text}>
          SHARE THE QR CODE WITH YOUR FRIENDS TO INVITE THEM TO THE ROSCA
        </AppText>
        <View style={styles.qrCode} />
        <AppText style={styles.text}>Invite Code</AppText>
        <View style={styles.codeContainer}>
          <AppText style={styles.codeText}>1151515</AppText>
          <MaterialCommunityIcons
            name="content-copy"
            color={colors.medium}
            size={20}
          />
        </View>
      </View>
      <View style={styles.bottonsContainer}>
        <FooterButton onPress={() => {}}>Done</FooterButton>
        <FooterButton onPress={() => {}} backgroundColor={colors.secondary}>
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  codeText: {
    fontSize: 14,
  },
});

export default InviteScreen;

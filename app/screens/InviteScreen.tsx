import React, { useState } from "react";
import Screen from "../components/Screen";
import { Text, View, StyleSheet, TouchableOpacity, Share } from "react-native";
import FooterButton from "../components/FooterButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Clipboard from "expo-clipboard";

const InviteScreen = ({ route }) => {
  const { invitationCode } = route.params;
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await Clipboard.setStringAsync(invitationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide "Copied!" after 2 seconds
  };

  const shareCode = async () => {
    try {
      await Share.share({
        message: `Join my Rosca using this code: ${invitationCode}`,
      });
    } catch (error) {
      console.error("Sharing failed:", error);
    }
  };

  return (
    <Screen>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <AppText>Invite your friends!</AppText>
          <FontAwesome name="share-alt" size={20} color={colors.medium} />
        </View>

        <AppText style={styles.text}>
          Share the QR code with your friends to invite them to the Rosca
        </AppText>

        <View style={styles.qrCode} />

        <AppText style={styles.text}>Invite Code</AppText>

        <View style={styles.codeContainer}>
          <AppText style={styles.codeText}>{invitationCode}</AppText>
          <TouchableOpacity onPress={copyCode}>
            <MaterialCommunityIcons
              name="content-copy"
              color={colors.medium}
              size={20}
            />
          </TouchableOpacity>
        </View>

        {copied && <AppText style={styles.copiedText}>Copied!</AppText>}
      </View>

      <View style={styles.bottonsContainer}>
        <FooterButton onPress={() => {}}>Done</FooterButton>
        <FooterButton onPress={shareCode} backgroundColor={colors.secondary}>
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
  copiedText: {
    marginTop: 8,
    color: "green",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginRight: 20,
  },
});

export default InviteScreen;

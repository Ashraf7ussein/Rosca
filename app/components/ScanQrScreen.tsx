import React, { useRef } from "react";
import Screen from "../components/Screen";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import FooterButton from "../components/FooterButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PinInput from "./PinInput";
import { useForm, FieldValues } from "react-hook-form";
import { useAuth } from "../services/authContext";
import apiClient from "../services/apiClient";

const pins = ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"];

const ScanQrScreen = () => {
  const { control, handleSubmit } = useForm();
  const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null));
  const { user } = useAuth();

  const onSubmit = async (data: FieldValues) => {
    const code = Object.values(data).join("");
    if (code.length !== 6) {
      Alert.alert(
        "Invalid Code",
        "Please enter a valid 6-digit invitation code."
      );
      return;
    }

    if (!user) {
      Alert.alert("User not authenticated", "Please login to proceed.");
      return;
    }

    try {
      const payload = {
        invitationCode: code,
        name: user.displayName,
        userId: user.uid,
      };

      console.log(payload);

      const response = await apiClient.post("/api/roscas/join", payload);
      Alert.alert("Success", "You have requested to join the ROSCA.");
    } catch (error) {
      console.error("Join error:", error);
      Alert.alert("Error", "Unable to join. Please try again.");
    }
  };

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <AppText>Scan QR Code</AppText>
        <FontAwesome name="camera" size={20} color={colors.medium} />
      </View>
      <AppText style={styles.text}>Scan the QR Code to Join</AppText>
      <View style={styles.content}>
        <View style={styles.qrCode} />
        <View style={styles.textContainer}>
          <AppText>Or</AppText>
          <AppText>Enter your invitation code</AppText>
          <View style={styles.inputsContainer}>
            {pins.map((name, index) => (
              <PinInput
                key={name}
                name={name}
                control={control}
                index={index}
                inputRefs={inputRefs}
              />
            ))}
          </View>
        </View>
      </View>
      <FooterButton onPress={handleSubmit(onSubmit)}>Ask to join</FooterButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 25,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  textContainer: {
    alignItems: "center",
    gap: 20,
  },
  inputsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ScanQrScreen;

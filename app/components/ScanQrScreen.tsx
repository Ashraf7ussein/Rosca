import React, { useRef } from "react";
import Screen from "../components/Screen";
import { View, StyleSheet, TextInput } from "react-native";
import FooterButton from "../components/FooterButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PinInput from "./PinInput";
import { useForm } from "react-hook-form";

const pins = ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6"];
const ScanQrScreen = () => {
  const { control, handleSubmit } = useForm();
  const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

  const onSubmit = (data: any) => {
    const code = Object.values(data).join("");
  };

  return (
    <Screen>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <AppText>Scan QR Code</AppText>
          <FontAwesome name="camera" size={20} color={colors.medium} />
        </View>
        <AppText style={styles.text}>Scan the QR Code to Join</AppText>
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
  textContainer: {
    alignItems: "center",
    gap: 20,
  },
  inputsContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default ScanQrScreen;

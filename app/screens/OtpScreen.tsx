import React, { useRef } from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { View, StyleSheet, TextInput } from "react-native";
import PinInput from "../components/PinInput";
import { useForm } from "react-hook-form";
import FooterButton from "../components/FooterButton";
import useAppNavigation from "../hooks/useAppNavigation";

const pins = ["pin1", "pin2", "pin3", "pin4"];

const OtpScreen = () => {
  const { control, handleSubmit } = useForm();
  const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

  const navigation = useAppNavigation();
  return (
    <Screen>
      <AppText style={styles.headerText}>We Sent You A 4 Digit Code</AppText>
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
      <AppText style={styles.resend}>Resend Code</AppText>
      <FooterButton onPress={() => navigation.navigate("BillScreen")}>
        Continue
      </FooterButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
  },
  inputsContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
    marginTop: 100,
  },
  resend: {
    fontSize: 16,
    textDecorationLine: "underline",
    alignSelf: "center",
  },
});

export default OtpScreen;

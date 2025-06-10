import React, { useRef } from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { View, StyleSheet, TextInput } from "react-native";
import PinInput from "../components/PinInput";
import { useForm } from "react-hook-form";
import FooterButton from "../components/FooterButton";
import useAppNavigation from "../hooks/useAppNavigation";
import colors from "../config/colors";

const pins = ["pin1", "pin2", "pin3", "pin4"];

const OtpScreen = () => {
  const { control, handleSubmit } = useForm();
  const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

  const navigation = useAppNavigation();
  return (
    <Screen>
      <AppText>We Sent You A 4 Digit Code</AppText>
      <View style={styles.content}>
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
      </View>
      <View style={styles.buttonsContainer}>
        <FooterButton onPress={() => navigation.navigate("BillScreen")}>
          Continue
        </FooterButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
  },
  buttonsContainer: {
    gap: 10,
  },
});

export default OtpScreen;

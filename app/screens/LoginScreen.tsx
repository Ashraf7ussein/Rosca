import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Screen from "../components/Screen";
import FooterButton from "../components/FooterButton";
import AppFormInput from "../components/AppFormInput";
import AppText from "../components/AppText";

import { RootStackParamList } from "../../types";
import { signIn, signUp } from "../services/authService";
import colors from "../config/colors";

interface FormInputs {
  email: string;
  password: string;
  confirmPassword?: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>();

  const [isSignup, setSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormInputs) => {
    setErrorMessage(null); // Clear previous errors on submit

    const { email, password, confirmPassword } = data;

    if (isSignup) {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }
      try {
        const user = await signUp(email, password);
        console.log("Signed up user:", user.user.email);
        navigation.navigate("Enter");
      } catch (err: any) {
        setErrorMessage(err.message);
      }
    } else {
      try {
        const user = await signIn(email, password);
        console.log("Logged in user:", user.user.email);
        navigation.navigate("Enter");
      } catch (err: any) {
        setErrorMessage(err.message);
      }
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppFormInput
          name="email"
          label="Email"
          type="email"
          placeholder="abc@gmail.com"
          control={control}
          error={errors.email}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          }}
        />
        <AppFormInput
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          control={control}
          error={errors.password}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />
        {isSignup && (
          <AppFormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            control={control}
            error={errors.confirmPassword}
            rules={{
              required: "Please confirm your password",
              validate: (value: string) =>
                value === getValues("password") || "Passwords do not match",
            }}
          />
        )}

        {errorMessage && (
          <AppText style={styles.errorText}>{errorMessage}</AppText>
        )}

        <TouchableOpacity onPress={() => setSignup(!isSignup)}>
          <AppText style={styles.signupText}>
            {isSignup
              ? "Already have an account? Login"
              : "Don't have an account? Signup"}
          </AppText>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <FooterButton onPress={handleSubmit(onSubmit)}>
          {isSignup ? "Signup" : "Login"}
        </FooterButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    gap: 10,
  },
  signupText: {
    marginTop: 10,
    color: colors.primary,
    textAlign: "center",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  errorText: {
    color: colors.danger,
    textAlign: "center",
    marginVertical: 10,
    fontSize: 14,
  },
});

export default LoginScreen;

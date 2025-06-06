import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import AppFormInput from "../components/AppFormInput";
import AppText from "../components/AppText";
import FooterButton from "../components/FooterButton";
import Screen from "../components/Screen";
import { Rosca, Member } from "../../types";

import colors from "../config/colors";
import apiClient from "../services/apiClient";
import { signIn, signUp } from "../services/authService";
import Spinner from "../components/Spinner";
import useAppNavigation from "../hooks/useAppNavigation";
import Toast from "react-native-toast-message";

interface FormInputs {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const LoginScreen = () => {
  const navigation = useAppNavigation();
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const [isSignup, setSignup] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    setLoading(true);

    const { email, password, confirmPassword, name } = data;

    if (isSignup) {
      if (password !== confirmPassword) {
        setLoading(false);
        Toast.show({
          type: "error",
          text1: "Passwords do not match",
        });
        return;
      }
      try {
        const user = await signUp(email, password, name);
        reset();
        navigation.navigate("Enter");
      } catch (err: any) {
        Toast.show({
          type: "error",
          text1: "Signup Failed",
          text2: err.message || "Please try again",
        });
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const user = await signIn(email, password);
        const res = await apiClient.get(`/user/roscas/${user.user.uid}`);
        const userRoscas = res.data.roscas;
        reset();

        const acceptedRoscas = userRoscas.filter((rosca: Rosca) =>
          rosca.membersArray.some(
            (member: Member) =>
              member._id === user.user.uid && member.memberStatus === "accepted"
          )
        );

        if (acceptedRoscas.length > 0) {
          navigation.navigate("Home", { userRoscas: acceptedRoscas });
        } else {
          navigation.navigate("Enter");
        }
      } catch (err: any) {
        Toast.show({
          type: "error",
          text1: "Login Failed",
          text2: err.message || "Please try again",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Screen>
      <Spinner visible={isLoading} />

      <ScrollView>
        <AppText style={styles.welcomeText}>
          {isSignup
            ? "Welcome! Create your account"
            : "Welcome back! Please log in"}
        </AppText>

        <View style={styles.container}>
          {isSignup && (
            <AppFormInput
              name="name"
              placeholder="Enter Your name"
              control={control}
              error={errors.name}
              rules={{
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              }}
            />
          )}
          <AppFormInput
            name="email"
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

          <TouchableOpacity onPress={() => setSignup(!isSignup)}>
            <AppText style={styles.signupText}>
              {isSignup
                ? "Already have an account? Login"
                : "Don't have an account? Signup"}
            </AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <FooterButton disabled={isLoading} onPress={handleSubmit(onSubmit)}>
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
    marginBottom: 20,
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
  welcomeText: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 50,
    marginTop: 10,
    color: colors.primary,
  },
});

export default LoginScreen;

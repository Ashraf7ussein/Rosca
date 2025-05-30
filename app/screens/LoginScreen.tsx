import React from "react";
import Screen from "../components/Screen";
import { View, StyleSheet } from "react-native";
import FooterButton from "../components/FooterButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import AppFormInput from "../components/AppFormInput";
import { useForm } from "react-hook-form";

interface FormInputs {
  email: string;
  password: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const onSubmit = (data: FormInputs) => {
  const { email, password } = data;

  console.log(data);
};

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

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
          }}
        />
        <AppFormInput
          type="password"
          name="password"
          label="Password"
          placeholder="Enter you password"
          control={control}
          error={errors.password}
          rules={{
            required: "Password is required",
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <FooterButton onPress={handleSubmit(onSubmit)}>Login</FooterButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    gap: 10,
  },
  container: {
    flex: 1,
  },
});

export default LoginScreen;

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Platform,
  Button,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Controller, FieldError, Control } from "react-hook-form";
import AppText from "./AppText";
import colors from "../config/colors";
import Feather from "@expo/vector-icons/Feather";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
  error?: FieldError;
  rules?: any;
  type?: "text" | "number" | "date" | "email" | "password";
}

const AppFormInput = ({
  name,
  label,
  placeholder,
  control,
  error,
  rules,
  type = "text",
}: Props) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const renderDateInput = (value: any, onChange: (date: Date) => void) => {
    const dateValue = value ? new Date(value) : new Date();

    return (
      <>
        <Pressable onPress={() => setShowDatePicker(true)}>
          <View
            style={[
              styles.input,
              styles.dateInput,
              error && { borderColor: "red" },
            ]}
          >
            <AppText style={value ? styles.dateText : styles.placeholder}>
              {value ? dateValue.toLocaleDateString() : placeholder}
            </AppText>
          </View>
        </Pressable>
        {showDatePicker && (
          <Modal animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <DateTimePicker
                  value={dateValue}
                  mode="date"
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  onChange={(_, selectedDate) => {
                    if (Platform.OS !== "ios") setShowDatePicker(false);
                    if (selectedDate) onChange(selectedDate);
                  }}
                />
                {Platform.OS === "ios" && (
                  <Button
                    title="Confirm"
                    onPress={() => setShowDatePicker(false)}
                  />
                )}
              </View>
            </View>
          </Modal>
        )}
      </>
    );
  };

  const renderPasswordInput = (
    value: any,
    onChange: (text: string) => void
  ) => (
    <View
      style={[
        styles.input,
        styles.passwordContainer,
        error && { borderColor: "red" },
      ]}
    >
      <TextInput
        value={String(value)}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={!passwordVisible}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        style={styles.passwordInput}
      />
      <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
        <Feather
          name={passwordVisible ? "eye" : "eye-off"}
          size={24}
          color={colors.medium}
        />
      </Pressable>
    </View>
  );

  const renderTextInput = (value: any, onChange: (text: string) => void) => (
    <TextInput
      value={String(value)}
      onChangeText={onChange}
      placeholder={placeholder}
      style={[styles.input, error && { borderColor: "red" }]}
      keyboardType={
        type === "number"
          ? "numeric"
          : type === "email"
          ? "email-address"
          : "default"
      }
      autoCapitalize={type === "email" ? "none" : "sentences"}
      autoCorrect={type === "email" ? false : true}
      textContentType={type === "email" ? "emailAddress" : "none"}
    />
  );

  return (
    <View style={styles.container}>
      <AppText style={styles.label}>{label}</AppText>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({ field: { value, onChange } }) => {
          switch (type) {
            case "date":
              return renderDateInput(value, onChange);
            case "password":
              return renderPasswordInput(value, onChange);
            default:
              return renderTextInput(value, onChange);
          }
        }}
      />
      {error && <AppText style={styles.errorMessage}>{error.message}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: colors.secondary,
    textTransform: "capitalize",
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.secondary,
    width: "100%",
    padding: 20,
    borderRadius: 15,
  },
  dateInput: {
    justifyContent: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  dateText: {
    fontSize: 16,
  },
  placeholder: {
    fontSize: 16,
    color: colors.medium,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
});

export default AppFormInput;

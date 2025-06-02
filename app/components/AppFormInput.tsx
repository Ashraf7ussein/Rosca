import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  name: string;
  label?: string;
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
  const [tempDate, setTempDate] = useState<Date>(new Date());
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <AppText style={styles.label}>{label}</AppText>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({ field: { value, onChange } }) => {
          if (type === "date") {
            const dateValue = value ? new Date(value) : new Date();

            return (
              <>
                <Pressable
                  onPress={() => {
                    setTempDate(dateValue);
                    setShowDatePicker(true);
                  }}
                >
                  <View
                    style={[
                      styles.input,
                      error ? { borderColor: colors.danger } : null,
                    ]}
                  >
                    <AppText
                      style={value ? styles.dateText : styles.placeholder}
                    >
                      {value
                        ? new Date(value).toLocaleDateString()
                        : placeholder}
                    </AppText>
                  </View>
                </Pressable>

                {showDatePicker && (
                  <Modal
                    transparent={true}
                    visible={showDatePicker}
                    animationType="slide"
                    onRequestClose={() => setShowDatePicker(false)}
                  >
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                        <DateTimePicker
                          value={tempDate}
                          mode="date"
                          display={
                            Platform.OS === "ios" ? "spinner" : "default"
                          }
                          onChange={(event, selectedDate) => {
                            if (Platform.OS !== "ios") {
                              if (selectedDate) {
                                setTempDate(selectedDate);
                              }
                            } else if (selectedDate) {
                              setTempDate(selectedDate);
                            }
                          }}
                          themeVariant="light"
                          textColor="black"
                        />
                        <View style={styles.buttonRow}>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                              onChange(tempDate.toISOString());
                              setShowDatePicker(false);
                            }}
                          >
                            <AppText style={styles.confirm}>Confirm</AppText>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => setShowDatePicker(false)}
                          >
                            <AppText style={styles.cancel}>Cancel</AppText>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
                )}
              </>
            );
          }

          if (type === "password") {
            return (
              <View
                style={[
                  styles.input,
                  styles.passwordContainer,
                  isFocused && { borderColor: colors.primary, borderWidth: 2 },
                  error && { borderColor: colors.danger },
                ]}
              >
                <TextInput
                  value={String(value)}
                  onChangeText={onChange}
                  placeholder={placeholder}
                  secureTextEntry={!passwordVisible}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  textContentType="password"
                  style={styles.passwordInput}
                />
                <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? (
                    <FaRegEye size={24} />
                  ) : (
                    <FaRegEyeSlash size={24} />
                  )}
                </Pressable>
              </View>
            );
          }

          return (
            <TextInput
              value={String(value)}
              onChangeText={onChange}
              style={[
                styles.input,
                isFocused && { borderColor: colors.primary, borderWidth: 2 },
                error && { borderColor: colors.danger },
              ]}
              placeholder={placeholder}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              keyboardType={type === "number" ? "numeric" : "default"}
            />
          );
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
    outlineWidth: 0,
  },
  errorMessage: {
    color: colors.danger,
    fontSize: 16,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    color: colors.dark,
  },
  placeholder: {
    fontSize: 16,
    color: colors.medium,
  },
  passwordInput: {
    flex: 1,
    outlineWidth: 0,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  confirm: {
    fontSize: 16,
    color: colors.primary,
  },
  cancel: {
    fontSize: 16,
    color: colors.danger,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
});

export default AppFormInput;

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

interface Props {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
  error?: FieldError;
  rules?: any;
  type?: "text" | "number" | "date";
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

  return (
    <View style={styles.container}>
      <AppText style={styles.label}>{label}</AppText>
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
                <Pressable onPress={() => setShowDatePicker(true)}>
                  <View
                    style={[
                      styles.input,
                      error ? { borderColor: "red" } : null,
                    ]}
                  >
                    <AppText
                      style={value ? styles.dateText : styles.placeholder}
                    >
                      {value ? dateValue.toLocaleDateString() : placeholder}
                    </AppText>
                  </View>
                </Pressable>
                {showDatePicker && (
                  <Modal animationType="slide">
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                        <DateTimePicker
                          value={dateValue}
                          mode="date"
                          display={
                            Platform.OS === "ios" ? "spinner" : "default"
                          }
                          onChange={(event, selectedDate) => {
                            setShowDatePicker(Platform.OS === "ios");
                            if (selectedDate) {
                              onChange(selectedDate);
                            }
                          }}
                        />
                        <Button
                          title="Confirm"
                          onPress={() => setShowDatePicker(false)}
                        />
                      </View>
                    </View>
                  </Modal>
                )}
              </>
            );
          }

          return (
            <TextInput
              value={String(value)}
              onChangeText={onChange}
              style={[styles.input, error ? { borderColor: "red" } : null]}
              placeholder={placeholder}
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
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
  },
  modalContent: {
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
});

export default AppFormInput;

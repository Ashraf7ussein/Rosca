import React from "react";
import { Control, Controller } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";

interface Props {
  control: Control<any>;
  name: string;
  index: number;
  inputRefs: React.RefObject<TextInput | null>[];
}

const PinInput = ({ control, name, index, inputRefs }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <TextInput
          ref={inputRefs[index]}
          style={styles.input}
          keyboardType="number-pad"
          returnKeyType="done"
          maxLength={1}
          placeholder="o"
          value={value}
          onChangeText={(text) => {
            if (text.length === 1 && index < inputRefs.length - 1) {
              inputRefs[index + 1].current?.focus();
            }
            onChange(text);
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace" && !value && index > 0) {
              inputRefs[index - 1].current?.focus();
            }
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 20,
    borderRadius: 15,
  },
});

export default PinInput;

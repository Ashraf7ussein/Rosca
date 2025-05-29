import React from "react";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import AppFormInput from "../components/AppFormInput";
import FooterButton from "../components/FooterButton";
import Screen from "../components/Screen";
import AppText from "../components/AppText";

interface FormInputs {
  name: string;
  membersCount: string;
  monthlyAmount: string;
  startingDate: string;
  endingDate: string;
}

const FormScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <Screen>
      <AppText style={styles.headerText}>Create new rosca</AppText>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={80}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.content}>
            <AppFormInput
              name="name"
              label="Name"
              placeholder="Ex: Neighborhood"
              control={control}
              error={errors.name}
              rules={{
                required: "Name is required",
              }}
            />
            <AppFormInput
              type="number"
              name="membersCount"
              label="Members Count"
              placeholder="Ex: 5"
              control={control}
              error={errors.membersCount}
              rules={{
                required: "Count is required",
              }}
            />
            <AppFormInput
              type="number"
              name="monthlyAmount"
              label="Monthly Amount"
              placeholder="Ex: 50 JOD"
              control={control}
              error={errors.monthlyAmount}
              rules={{
                required: "Monthly Amount is required",
              }}
            />
            <AppFormInput
              name="startingDate"
              label="Starting Date"
              type="date"
              placeholder="YYYY/MM"
              control={control}
              error={errors.startingDate}
              rules={{
                required: "Starting Date is required",
              }}
            />
            <AppFormInput
              name="endingDate"
              label="Ending Date"
              type="date"
              placeholder="YYYY/MM"
              control={control}
              error={errors.endingDate}
              rules={{
                required: "Ending Date is required",
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <FooterButton onPress={handleSubmit(onSubmit)}>Confirm</FooterButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  headerText: {
    marginBottom: 22,
  },
});

export default FormScreen;

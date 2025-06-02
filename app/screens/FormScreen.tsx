import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import AppFormInput from "../components/AppFormInput";
import AppText from "../components/AppText";
import FooterButton from "../components/FooterButton";
import Screen from "../components/Screen";
import apiClient from "../services/apiClient";
import { useAuth } from "../services/authContext";
import useAppNavigation from "../hooks/useAppNavigation";
import Spinner from "../components/Spinner";

interface FormInputs {
  name: string;
  membersCount: string;
  monthlyAmount: string;
  startingDate: string;
  endingDate: string;
}

interface FormScreenProps {
  route: {
    params?: {
      rosca?: {
        name: string;
        membersCount?: number;
        monthlyAmount?: number;
        startingDate?: string;
        endingDate?: string;
      };
    };
  };
}

const FormScreen: React.FC<FormScreenProps> = ({ route }) => {
  const { user } = useAuth();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();
  const [isLoading, setLoading] = useState(false);

  const navigation = useAppNavigation();
  const rosca = route.params?.rosca;

  const onSubmit = (data: FormInputs) => {
    setLoading(true);

    // if comming to edit already created rosca
    if (rosca) {
      apiClient
        .put(`/update/${rosca._id}`, data)
        .then(() => console.log("Success"))
        .catch((err) => console.log(err));
    }

    // if comming to create new rosca
    if (!user) return;
    const userData = {
      displayName: user.displayName,
      uid: user.uid,
    };

    const newData = { ...data, userData };
    apiClient
      .post("/create", newData)
      .then((res) => {
        navigation.navigate("RoscaDetailsScreen", { rosca: res.data });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err), setLoading(false);
      });
  };

  useEffect(() => {
    if (rosca) {
      reset({
        name: rosca.name || "",
        membersCount: rosca.membersCount?.toString() || "",
        monthlyAmount: rosca.monthlyAmount?.toString() || "",
        startingDate: rosca.startingDate || "",
        endingDate: rosca.endingDate || "",
      });
    }
  }, [rosca, reset]);

  const navigatoin = useAppNavigation();

  return (
    <Screen>
      <Spinner visible={isLoading} />
      <AppText style={styles.headerText}>
        {rosca ? `Edit ${rosca.name} Rosca` : "Create new rosca"}
      </AppText>
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
              rules={{ required: "Name is required" }}
            />
            <AppFormInput
              type="number"
              name="membersCount"
              label="Members Count"
              placeholder="Ex: 5"
              control={control}
              error={errors.membersCount}
              rules={{ required: "Count is required" }}
            />
            <AppFormInput
              type="number"
              name="monthlyAmount"
              label="Monthly Amount"
              placeholder="Ex: 50 JOD"
              control={control}
              error={errors.monthlyAmount}
              rules={{ required: "Monthly Amount is required" }}
            />
            <AppFormInput
              name="startingDate"
              label="Starting Date"
              type="date"
              placeholder="YYYY/MM"
              control={control}
              error={errors.startingDate}
              rules={{ required: "Starting Date is required" }}
            />
            <AppFormInput
              name="endingDate"
              label="Ending Date"
              type="date"
              placeholder="YYYY/MM"
              control={control}
              error={errors.endingDate}
              rules={{ required: "Ending Date is required" }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <FooterButton onPress={handleSubmit(onSubmit)}>
        {rosca ? "Save" : "Confirm"}
      </FooterButton>
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

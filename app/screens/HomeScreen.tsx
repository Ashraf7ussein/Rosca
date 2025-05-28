import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import RoscaCard from "../components/RoscaCard";
import AppText from "../components/AppText";

const HomeScreen = () => {
  return (
    <Screen>
      <AppText>Roscas</AppText>
      <RoscaCard
        name="Test"
        badge="closed"
        endingDate="1/1/2026"
        startingDate="1/1/2025"
        monthlyAmount="25 JD"
        totalAmount="500 JD"
      />
      <RoscaCard
        name="Test"
        badge="closed"
        endingDate="1/1/2026"
        startingDate="1/1/2025"
        monthlyAmount="25 JD"
        totalAmount="500 JD"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;

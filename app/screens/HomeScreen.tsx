import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Screen from "../components/Screen";
import RoscaCard from "../components/RoscaCard";
import AppText from "../components/AppText";

const HomeScreen = () => {
  return (
    <Screen>
      <ScrollView>
        <AppText style={styles.headerText}>Roscas</AppText>
        <RoscaCard
          name="Test"
          badgeLabel="active"
          endingDate="1/1/2026"
          startingDate="1/1/2025"
          monthlyAmount="25 JD"
          totalAmount="500 JD"
        />
        <RoscaCard
          name="Test"
          badgeLabel="pending"
          endingDate="1/1/2026"
          startingDate="1/1/2025"
          monthlyAmount="25 JD"
          totalAmount="500 JD"
        />
        <RoscaCard
          name="Test"
          badgeLabel="closed"
          endingDate="1/1/2026"
          startingDate="1/1/2025"
          monthlyAmount="25 JD"
          totalAmount="500 JD"
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
  },
});

export default HomeScreen;

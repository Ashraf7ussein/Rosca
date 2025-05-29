import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import TabContainer from "../components/TabContainer";
import PaymentCard from "../components/PaymentCard";

const PaymentsScreen = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const cards = [
    { name: "jpgn", label: "paid", month: "jan" },
    { name: "asdsa", label: "unpaid", month: "feb" },
    { name: "dasdsa", label: "prepay", month: "mar" },
  ];

  const filteredCards =
    selectedTab === "all"
      ? cards
      : cards.filter((card) => card.label === selectedTab);

  return (
    <Screen>
      <AppText style={styles.headerText}>Your Payments</AppText>
      <TabContainer
        onPress={(tab) => setSelectedTab(tab)}
        selectedTab={selectedTab}
        tabs={[
          { label: "All", value: "all" },
          { label: "Paid", value: "paid" },
          { label: "Unpaid", value: "unpaid" },
          { label: "Prepay", value: "prepay" },
        ]}
      />
      <ScrollView>
        {filteredCards.map((card, index) => (
          <PaymentCard
            key={index}
            name={card.name}
            label={card.label}
            month={card.month}
          />
        ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
  },
});

export default PaymentsScreen;

import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import TabContainer from "../components/TabContainer";
import PaymentCard from "../components/PaymentCard";
import Payment from "../../types";

const PaymentsScreen = ({ route }) => {
  const [selectedTab, setSelectedTab] = useState("all");
  const { payments } = route.params;

  const filteredCards =
    selectedTab === "all"
      ? payments
      : payments.filter(
          (payment: Payment) => payment.paymentStatus === selectedTab
        );

  return (
    <Screen>
      <AppText style={styles.headerText}>My Payments</AppText>
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
        {filteredCards &&
          filteredCards.map((payment: Payment, index: number) => (
            <PaymentCard
              key={index}
              name={payment.toUserName}
              label={payment.paymentStatus}
              toUserId={payment.toUserId}
              month={new Date(payment.month).toLocaleDateString("en-US", {
                month: "long",
              })}
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

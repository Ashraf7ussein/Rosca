import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

interface Props {
  name: string;
  badge: string;
  monthlyAmount: string;
  totalAmount: string;
  startingDate: string;
  endingDate: string;
}

const RoscaCard = ({
  name,
  badge,
  monthlyAmount,
  totalAmount,
  startingDate,
  endingDate,
}: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.badge}>{badge}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.cardLeft, styles.title]}>Monthly Amount</Text>
          <Text style={[styles.cardLeft, styles.mb10]}>{monthlyAmount}</Text>
          <Text style={[styles.cardLeft, styles.title]}>Total Amount</Text>
          <Text style={styles.cardLeft}>{totalAmount}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.cardRight, styles.title]}>Starting Date</Text>
          <Text style={[styles.cardRight, styles.mb10]}>{startingDate}</Text>
          <Text style={[styles.cardRight, styles.title]}>Ending Date</Text>
          <Text style={styles.cardRight}>{endingDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    color: colors.black,
  },
  badge: {
    backgroundColor: colors.light,
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 14,
    color: colors.black,
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardLeft: {
    textAlign: "left",
    fontSize: 14,
    textTransform: "uppercase",
  },
  cardRight: {
    textAlign: "right",
    fontSize: 14,
    textTransform: "uppercase",
  },
  title: {
    color: colors.medium,
    marginBottom: 4,
  },
  mb10: {
    marginBottom: 10,
  },
});

export default RoscaCard;

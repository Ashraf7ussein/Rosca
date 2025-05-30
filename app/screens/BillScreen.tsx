import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../config/colors";
import { View, StyleSheet } from "react-native";

const BillScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText>Bill Payed Successfully</AppText>
        <FontAwesome name="share-alt" size={20} color={colors.medium} />
      </View>
      <View style={styles.bill}>
        <View style={styles.billTop}>
          <AppText style={styles.price}>100.00 jod</AppText>
          <AppText style={styles.groupName}>Family Group</AppText>
        </View>

        <View style={styles.billBottom}>
          <View>
            <AppText style={styles.title}>Monthly Amount</AppText>
            <AppText style={styles.value}>100 jod</AppText>
          </View>
          <View>
            <AppText style={styles.title}>Monthly Amount</AppText>
            <AppText style={styles.value}>100 jod</AppText>
          </View>
          <View>
            <AppText style={styles.title}>Monthly Amount</AppText>
            <AppText style={styles.value}>100 jod</AppText>
          </View>
          <View>
            <AppText style={styles.title}>Monthly Amount</AppText>
            <AppText style={styles.value}>100 jod</AppText>
          </View>
        </View>
      </View>
      <View style={styles.zigZag}>
        {Array.from({ length: 20 }).map((_, i) => (
          <View key={i} style={styles.triangle} />
        ))}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },

  bill: {
    backgroundColor: colors.white,
    padding: 20,
    borderTopColor: colors.dark,
    borderTopWidth: 2,
  },
  billTop: {
    alignItems: "center",
    justifyContent: "center",
  },
  billBottom: {
    alignItems: "flex-start",
    marginTop: 55,
    gap: 20,
  },
  price: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.primary,
  },
  groupName: {
    fontSize: 16,
    color: colors.dark,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    color: colors.medium,
  },
  value: {
    fontSize: 18,
    color: colors.dark,
  },
  zigZag: {
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "hidden",
  },
  triangle: {
    width: 10,
    height: 20,
    backgroundColor: "white",
    transform: [{ rotate: "45deg" }],
    marginRight: 10, // slight overlap to make it sharp
    top: -12,
  },
});

export default BillScreen;

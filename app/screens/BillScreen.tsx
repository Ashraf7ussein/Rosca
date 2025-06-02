import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../config/colors";
import { View, StyleSheet } from "react-native";
import FooterButton from "../components/FooterButton";
import PriceTag from "../components/PriceTag";
import useAppNavigation from "../hooks/useAppNavigation";

const BillScreen = () => {
  const navigation = useAppNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <AppText>Bill Payed Successfully</AppText>
        <FontAwesome name="share-alt" size={20} color={colors.medium} />
      </View>
      <View style={styles.bill}>
        <View style={styles.billTop}>
          <PriceTag amount={120.25} size={50} />
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
      <FooterButton
        onPress={() => {
          navigation.navigate("");
        }}
      >
        Home
      </FooterButton>
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
    flex: 1,
  },
  billTop: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    paddingBottom: 25,
  },
  billBottom: {
    alignItems: "flex-start",
    marginTop: 25,
    gap: 20,
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

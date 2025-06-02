import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { View, StyleSheet, ScrollView } from "react-native";
import colors from "../config/colors";
import CircularIcon from "../components/CircularIcon";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FooterButton from "../components/FooterButton";
import useAppNavigation from "../hooks/useAppNavigation";

const PaymentConfirmationScreen = ({ route }) => {
  const { toUserId, name, month } = route.params;
  const navigation = useAppNavigation();
  return (
    <Screen>
      <AppText style={styles.headerText}>Confirm your payment</AppText>
      <ScrollView>
        <View style={styles.priceContainer}>
          <AppText style={styles.price}>100.00</AppText>
          <AppText style={styles.currency}>Jod</AppText>
        </View>
        <AppText style={styles.biller}>Biller</AppText>

        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <CircularIcon name="wallet" color={colors.black} size={35} />
            <AppText>Family</AppText>
          </View>
          <FontAwesome name="save" size={20} color={colors.medium} />
        </View>
        <View style={styles.verticalContainer}>
          <AppText style={styles.title}>Monthly Amount</AppText>
          <AppText style={styles.subTitle}>50 jod</AppText>
        </View>
        <View style={styles.verticalContainer}>
          <AppText style={styles.title}>Commission</AppText>
          <AppText style={styles.subTitle}>50 jod</AppText>
        </View>
        <View style={styles.verticalContainer}>
          <AppText style={styles.title}>Month</AppText>
          <AppText style={styles.subTitle}>{month}</AppText>
        </View>
        <View style={styles.verticalContainer}>
          <AppText style={styles.title}>To</AppText>
          <AppText style={styles.subTitle}>{name}</AppText>
        </View>
      </ScrollView>
      <FooterButton
        onPress={() => {
          navigation.navigate("ReasonsScreen");
        }}
      >
        Confirm
      </FooterButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 40,
  },
  price: {
    fontSize: 55,
    color: colors.primary,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 16,
    color: colors.medium,
    textTransform: "uppercase",
    top: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    alignSelf: "center",
    marginBottom: 20,
  },
  biller: {
    fontSize: 16,
    color: colors.medium,
    textTransform: "uppercase",
    marginBottom: 27,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.medium,
    paddingBottom: 25,
    marginBottom: 15,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  verticalContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.medium,
    paddingBottom: 25,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    color: colors.medium,
  },
  subTitle: {
    fontSize: 22,
  },
});

export default PaymentConfirmationScreen;

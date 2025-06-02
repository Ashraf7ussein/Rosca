import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import CircularIcon from "../components/CircularIcon";
import useAppNavigation from "../hooks/useAppNavigation";

const ReasonsScreen = () => {
  const navigation = useAppNavigation();
  return (
    <Screen>
      <AppText style={styles.headerText}>Why are you sending money?</AppText>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("OtpScreen")}>
          <View style={styles.container}>
            <CircularIcon name="map" size={40} />
            <View>
              <AppText style={styles.title}>Friend Or Family</AppText>
              <AppText style={styles.subTitle}>Transfer for loved ones</AppText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  headerText: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
  },
  subTitle: {
    fontSize: 16,
  },
});

export default ReasonsScreen;

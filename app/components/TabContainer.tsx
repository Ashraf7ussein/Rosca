import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

interface Props {
  onPress: (tab: string) => void;
  selectedTab: string;
}

const TabContainer = ({ onPress, selectedTab }: Props) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity onPress={() => onPress("accepted")}>
        <AppText
          style={{
            fontSize: 18,
            fontWeight: selectedTab === "accepted" ? "bold" : "normal",
            color:
              selectedTab === "accepted" ? colors.primary : colors.bodyText,
          }}
        >
          Accepted
        </AppText>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPress("waiting")}>
        <AppText
          style={{
            fontSize: 18,
            fontWeight: selectedTab === "waiting" ? "bold" : "normal",
            color: selectedTab === "waiting" ? colors.primary : colors.bodyText,
          }}
        >
          Waiting Approval
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
});

export default TabContainer;

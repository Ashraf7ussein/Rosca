import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

interface TabItem {
  label: string;
  value: string;
}

interface Props {
  onPress: (tab: string) => void;
  selectedTab: string;
  tabs: TabItem[];
}

const TabContainer = ({ onPress, selectedTab, tabs }: Props) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.value} onPress={() => onPress(tab.value)}>
          <AppText
            style={{
              fontSize: 18,
              fontWeight: selectedTab === tab.value ? "bold" : "normal",
              color:
                selectedTab === tab.value ? colors.primary : colors.bodyText,
            }}
          >
            {tab.label}
          </AppText>
        </TouchableOpacity>
      ))}
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

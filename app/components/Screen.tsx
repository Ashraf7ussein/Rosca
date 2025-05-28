import React, { ReactNode } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

interface Props {
  children: ReactNode;
}

const Screen = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.light,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Screen;

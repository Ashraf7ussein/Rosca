import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import CircularIcon from "./CircularIcon";
import AppText from "./AppText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "../config/colors";

interface Props {
  text: string;
  iconName: string;
  onPress: () => void;
}

const OptionItem = ({ text, iconName, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.container, { gap: 15 }]}>
          <CircularIcon name={iconName} size={35} />
          <AppText style={styles.text}>{text}</AppText>
        </View>
        <MaterialIcons
          name="arrow-forward-ios"
          size={15}
          color={colors.medium}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default OptionItem;

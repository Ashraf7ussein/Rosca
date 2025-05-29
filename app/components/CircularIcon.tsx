import React, { ComponentProps } from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

interface Props {
  size: number;
  name: IconName;
  color?: string;
}

const CircularIcon = ({ size, name, color = colors.black }: Props) => {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: size * 2,
        padding: size / 4,
      }}
    >
      <MaterialCommunityIcons name={name} size={size} color={colors.white} />
    </View>
  );
};

export default CircularIcon;

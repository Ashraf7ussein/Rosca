import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Rosca from "../../types";
import AppText from "../components/AppText";
import RoscaCard from "../components/RoscaCard";
import Screen from "../components/Screen";
import useAppNavigation from "../hooks/useAppNavigation";

const HomeScreen = ({ route }) => {
  const { userRoscas } = route.params;
  const navigation = useAppNavigation();

  return (
    <Screen>
      <ScrollView>
        <AppText style={styles.headerText}>Roscas</AppText>
        {userRoscas &&
          userRoscas.map((rosca: Rosca) => (
            <TouchableOpacity
              key={rosca._id}
              onPress={() =>
                navigation.navigate("RoscaDetailsScreen", { rosca })
              }
            >
              <RoscaCard rosca={rosca} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
  },
});

export default HomeScreen;

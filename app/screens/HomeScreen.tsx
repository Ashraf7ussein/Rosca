import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/Screen";
import RoscaCard from "../components/RoscaCard";
import AppText from "../components/AppText";
import { useNavigation } from "@react-navigation/core";

interface Rosca {
  name: string;
  badgeLabel: string;
  endingDate: string;
  startingDate: string;
  monthlyAmount: string;
  totalAmount: string;
  _id: string;
}

const HomeScreen = ({ route }) => {
  const { userRoscas } = route.params;
  const navigation = useNavigation();

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
              <RoscaCard
                name={rosca.name}
                badgeLabel={rosca.badgeLabel}
                endingDate={rosca.endingDate}
                startingDate={rosca.startingDate}
                monthlyAmount={rosca.monthlyAmount}
                totalAmount={rosca.totalAmount}
              />
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

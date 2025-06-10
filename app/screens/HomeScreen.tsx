import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, FlatList, View } from "react-native";
import { Rosca } from "../../types";
import AppText from "../components/AppText";
import RoscaCard from "../components/RoscaCard";
import Screen from "../components/Screen";
import useAppNavigation from "../hooks/useAppNavigation";
import apiClient from "../services/apiClient";
import { useAuth } from "../services/authContext";
import CircularIcon from "../components/CircularIcon";

const HomeScreen = ({ route }) => {
  const { user } = useAuth();
  const { userRoscas: initialRoscas } = route.params;
  const [roscas, setRoscas] = useState<Rosca[]>(initialRoscas);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useAppNavigation();

  const onRefresh = async () => {
    if (!user) {
      console.warn("User not logged in.");
      setRefreshing(false);
      return;
    }

    setRefreshing(true);

    try {
      const res = await apiClient.get(`/user/roscas/${user.uid}`);
      setRoscas(res.data.roscas);
      console.log("Refreshed user roscas:", res.data.roscas);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  const renderItem = ({ item }: { item: Rosca }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("RoscaDetailsScreen", { rosca: item })}
    >
      <RoscaCard rosca={item} />
    </TouchableOpacity>
  );

  return (
    <Screen>
      <FlatList
        data={roscas}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.container}>
            <AppText style={styles.headerText}>Roscas</AppText>
            <TouchableOpacity onPress={() => navigation.navigate("FormScreen")}>
              <CircularIcon name="plus" size={25} />
            </TouchableOpacity>
          </View>
        }
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default HomeScreen;

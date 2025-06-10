import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FooterButton from "../components/FooterButton";
import apiClient from "../services/apiClient";
import Toast from "react-native-toast-message";

const AdminSelectScreen = ({ route }) => {
  const [isLoading, setLoading] = useState(false);

  const { _id, membersArray: members } = route.params.rosca;

  const admin = members.find((m) => m.isAdmin);

  const [selectedAdminId, setSelectedAdminId] = useState(
    admin ? admin._id : null
  );

  const handleChangeAdmin = async (memberId: string) => {
    setLoading(true);
    try {
      await apiClient.put(`/change-admin/${_id}`, { newAdminId: memberId });

      Toast.show({
        type: "success",
        text1: "Admin updated successfully",
      });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error while updating admin",
        text2: error.message || "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAdmin = (id: string) => {
    setSelectedAdminId(id);
  };

  const renderItem = ({ item: member }) => {
    const initials = member.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    const isAdmin = member._id === selectedAdminId;

    return (
      <TouchableOpacity
        onPress={() => handleSelectAdmin(member._id)}
        style={styles.memberRow}
        activeOpacity={0.7}
      >
        <MaterialCommunityIcons
          name={isAdmin ? "radiobox-marked" : "radiobox-blank"}
          size={24}
          color={colors.primary}
        />
        <View style={styles.user}>
          <AppText style={styles.userLogo}>{initials}</AppText>
        </View>
        <AppText style={styles.username}>{member.name}</AppText>
      </TouchableOpacity>
    );
  };

  return (
    <Screen>
      <AppText style={styles.headerText}>Admin</AppText>
      <FlatList
        data={members}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
      <FooterButton
        onPress={() => handleChangeAdmin(selectedAdminId)}
        disabled={isLoading}
      >
        {isLoading ? "Updating..." : "Confirm"}
      </FooterButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingVertical: 8,
  },
  userLogo: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  username: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  user: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.medium,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AdminSelectScreen;

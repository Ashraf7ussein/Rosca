import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FooterButton from "../components/FooterButton";

const AdminSelectScreen = ({ route }) => {
  const members = route.params.members;

  const admin = members.find((m) => m.isAdmin);

  const [selectedAdminId, setSelectedAdminId] = useState(
    admin ? admin._id : null
  );

  const handleSelectAdmin = (id) => {
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
        onPress={() => {
          console.log("Selected admin ID:", selectedAdminId);
        }}
      >
        Confirm
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

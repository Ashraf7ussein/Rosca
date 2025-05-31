import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import CardBadge from "./CardBadge";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Rosca from "../../types";
import AppText from "./AppText";

interface Props {
  showEditButton?: boolean;
  rosca: Rosca;
}

const RoscaCard = ({ rosca, showEditButton = false }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>{rosca.name}</Text>
          {showEditButton && (
            <MaterialCommunityIcons name="pencil" size={20} color="black" />
          )}
        </View>

        <CardBadge roscaStatus={rosca.roscaStatus} />
      </View>

      <View style={styles.cardBody}>
        <View style={styles.column}>
          <Text style={[styles.cardLeft, styles.label]}>Monthly Amount</Text>
          <Text style={[styles.cardLeft, styles.value]}>
            {rosca.monthlyAmount}
          </Text>

          <Text style={[styles.cardLeft, styles.label]}>Total Amount</Text>
          <Text style={styles.cardLeft}>{rosca.totalAmount}</Text>
        </View>

        <View style={styles.column}>
          <Text style={[styles.cardRight, styles.label]}>Starting Date</Text>
          <Text style={[styles.cardRight, styles.value]}>
            {new Date(rosca.startingDate).toLocaleDateString()}
          </Text>

          <Text style={[styles.cardRight, styles.label]}>Ending Date</Text>
          <Text style={styles.cardRight}>
            {new Date(rosca.endingDate).toLocaleDateString()}
          </Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        {rosca.membersArray.map((member) => {
          const initials = member.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();

          return (
            <View
              key={member._id}
              style={[styles.user, member.isAdmin && styles.adminUser]}
            >
              <AppText style={styles.userLogo}>{initials}</AppText>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  name: {
    fontSize: 16,
    color: colors.black,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
  },
  cardLeft: {
    textAlign: "left",
    fontSize: 14,
    textTransform: "uppercase",
  },
  cardRight: {
    textAlign: "right",
    fontSize: 14,
    textTransform: "uppercase",
  },
  label: {
    color: colors.medium,
    marginBottom: 4,
  },
  value: {
    marginBottom: 10,
  },
  cardFooter: {
    marginTop: 12,
    flexDirection: "row",
  },
  user: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: -8,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  userLogo: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold",
  },
  adminUser: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderWidth: 2,
  },
});

export default RoscaCard;

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import CardBadge from "./CardBadge";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface Member {
  name: string;
  isAdmin: boolean;
  memberPaymentStatus: string;
  totalPayments: number;
  memberOrder: string;
  memberStatus: string;
  _id: string;
  assignedDate: string;
}

interface Props {
  name: string;
  badgeLabel: string;
  monthlyAmount: string;
  totalAmount: string;
  startingDate: string;
  endingDate: string;
  showEditButton?: boolean;
  membersArray: Member[];
}

const RoscaCard = ({
  name,
  badgeLabel,
  monthlyAmount,
  totalAmount,
  startingDate,
  endingDate,
  showEditButton = false,
}: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={styles.name}>{name}</Text>
          {showEditButton && (
            <MaterialCommunityIcons name="pencil" size={20} color="black" />
          )}
        </View>

        <CardBadge badgeLabel={badgeLabel} />
      </View>
      <View style={styles.cardBody}>
        <View style={styles.column}>
          <Text style={[styles.cardLeft, styles.label]}>Monthly Amount</Text>
          <Text style={[styles.cardLeft, styles.value]}>{monthlyAmount}</Text>
          <Text style={[styles.cardLeft, styles.label]}>Total Amount</Text>
          <Text style={styles.cardLeft}>{totalAmount}</Text>
        </View>
        <View style={styles.column}>
          <Text style={[styles.cardRight, styles.label]}>Starting Date</Text>
          <Text style={[styles.cardRight, styles.value]}>
            {" "}
            {new Date(startingDate).toLocaleDateString()}
          </Text>
          <Text style={[styles.cardRight, styles.label]}>Ending Date</Text>
          <Text style={styles.cardRight}>
            {" "}
            {new Date(endingDate).toLocaleDateString()}
          </Text>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.adminContainer}>
          <View
            style={[
              styles.user,
              {
                backgroundColor: colors.pending,
                borderWidth: 2,
                borderColor: colors.primary,
              },
            ]}
          ></View>
          <Text style={styles.adminText}>Admin</Text>
        </View>
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
  name: {
    fontSize: 16,
    color: colors.black,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  column: {
    flex: 1,
  },
  cardFooter: {
    marginTop: 12,
    flexDirection: "row",
  },
  user: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -8,
    borderWidth: 2,
    borderColor: colors.white,
  },
  adminContainer: {
    alignItems: "center",
    gap: 5,
  },
  adminText: {
    color: colors.primary,
  },
});

export default RoscaCard;

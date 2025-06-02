import React from "react";
import { RiPencilFill } from "react-icons/ri";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Rosca, Member } from "../../types";
import colors from "../config/colors";
import AppText from "./AppText";
import CardBadge from "./CardBadge";

interface Props {
  showEditButton?: boolean;
  rosca: Rosca;
  onEdit?: () => void;
}

const RoscaCard = ({ rosca, onEdit, showEditButton = false }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>{rosca.name}</Text>
          {showEditButton && (
            <TouchableOpacity onPress={onEdit}>
              <RiPencilFill size={24} />
            </TouchableOpacity>
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
        {rosca.membersArray
          .filter((member) => member.memberStatus === "accepted")
          .map((member) => {
            const initials = member.name
              .split(" ")
              .map((n: any) => n[0])
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

import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Member from "../../types";
import colors from "../config/colors";
import AppText from "./AppText";
import SquareButton from "./SquareButton";
import UserDetails from "./UserDetails";

interface Props {
  selectedTab: string;
  onSelectMember: (member: any) => void;
  membersArray: Member[];
}

const MembersList = ({ selectedTab, onSelectMember, membersArray }: Props) => {
  return (
    <ScrollView>
      {selectedTab === "accepted"
        ? membersArray
            ?.filter((m) => m.memberStatus === "accepted")
            .map((member) => (
              <UserDetails
                key={member._id}
                member={member}
                onPress={() => onSelectMember(member)}
              />
            ))
        : membersArray
            ?.filter((m) => m.memberStatus === "waiting")
            .map((member) => (
              <View key={member._id} style={styles.container}>
                <View style={styles.leftDetails}>
                  <View
                    style={[styles.user, member.isAdmin && styles.adminUser]}
                  >
                    <AppText style={styles.userLogo}>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AppText>
                  </View>
                  <View>
                    <AppText style={styles.username}>{member.name}</AppText>
                    <View style={styles.buttonsContainer}>
                      <SquareButton textColor={colors.black} onPress={() => {}}>
                        Accept
                      </SquareButton>
                      <SquareButton
                        backgroundColor={colors.secondary}
                        textColor={colors.black}
                        onPress={() => {}}
                      >
                        Reject
                      </SquareButton>
                    </View>
                  </View>
                </View>
                <AppText style={{ fontSize: 14, color: colors.medium }}>
                  2d
                </AppText>
              </View>
            ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    padding: 10,
  },
  leftDetails: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 6,
    marginTop: 4,
  },
  user: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginLeft: -8,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.medium,
    alignItems: "center",
    justifyContent: "center",
    top: -10,
  },
  userLogo: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  adminUser: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
  },
});

export default MembersList;

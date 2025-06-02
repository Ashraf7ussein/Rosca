import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppText from "../components/AppText";
import MembersList from "../components/MembersList";
import Screen from "../components/Screen";
import TabContainer from "../components/TabContainer";

const MembersScreen = ({ route }) => {
  const [selectedTab, setSelectedTab] = useState("accepted");
  const [membersArray, setMembersArray] = useState(route.params.members);

  return (
    <Screen>
      <AppText style={styles.headerText}>Members</AppText>
      <TabContainer
        onPress={(tab) => setSelectedTab(tab)}
        selectedTab={selectedTab}
        tabs={[
          { label: "Accepted", value: "accepted" },
          { label: "Waiting Approval", value: "waiting" },
        ]}
      />
      <MembersList
        membersArray={membersArray}
        selectedTab={selectedTab}
        onSelectMember={() => {}}
        handleMemberStatus={() => {}}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
  },
});

export default MembersScreen;

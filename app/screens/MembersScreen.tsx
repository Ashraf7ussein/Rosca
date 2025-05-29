import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import TabContainer from "../components/TabContainer";
import UserDetails from "../components/UserDetails";
import UserDetails2 from "../components/UserDetails2";
import MembersList from "../components/MembersList";

const MembersScreen = () => {
  const [selectedTab, setSelectedTab] = useState("accepted");

  return (
    <Screen>
      <AppText style={styles.headerText}>Memebrs</AppText>
      <TabContainer
        onPress={(tab) => setSelectedTab(tab)}
        selectedTab={selectedTab}
        tabs={[
          { label: "Accepted", value: "accepted" },
          { label: "Waiting Approval", value: "waiting" },
        ]}
      />
      <MembersList selectedTab={selectedTab} onSelectMember={() => {}} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
  },
});

export default MembersScreen;

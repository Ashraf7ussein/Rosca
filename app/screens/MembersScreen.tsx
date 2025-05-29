import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import TabContainer from "../components/TabContainer";
import UserDetails from "../components/UserDetails";
import UserDetails2 from "../components/UserDetails2";

const MembersScreen = () => {
  const [selectedTab, setSelectedTab] = useState("accepted");

  return (
    <Screen>
      <AppText style={styles.headerText}>Memebrs</AppText>
      <TabContainer
        onPress={(tab) => setSelectedTab(tab)}
        selectedTab={selectedTab}
      />
      <ScrollView>
        {selectedTab === "accepted" ? (
          <>
            <UserDetails
              name="this is th ena"
              date="asdlashd"
              badgeLabel="unpaid"
              order="1"
            />
            <UserDetails
              name="email"
              date="MAy"
              badgeLabel="nextpay"
              order="2"
            />
            <UserDetails name="name" date="oct" badgeLabel="paid" order="3" />
          </>
        ) : (
          <>
            <UserDetails2 name="this is th ena" />
            <UserDetails2 name="email" />
          </>
        )}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginBottom: 20,
  },
});

export default MembersScreen;

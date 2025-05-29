import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import AppModal from "../components/AppModal";
import AppText from "../components/AppText";
import CircularIcon from "../components/CircularIcon";
import FooterButton from "../components/FooterButton";
import RoscaCard from "../components/RoscaCard";
import Screen from "../components/Screen";
import UserDetails from "../components/UserDetails";
import UserDetails2 from "../components/UserDetails2";
import colors from "../config/colors";
import OptionItem from "../components/OptionItem";

const RoscaDetailsScreen = () => {
  const [selectedTab, setSelectedTab] = useState("accepted");
  const [modalVisible, setModalVisibility] = useState(false);

  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <RoscaCard
          name="Test"
          badgeLabel="closed"
          endingDate="1/1/2026"
          startingDate="1/1/2025"
          monthlyAmount="25 JD"
          totalAmount="500 JD"
          showEditButton
        />

        <View style={styles.container}>
          <AppText style={styles.text}>Members</AppText>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => setModalVisibility(true)}>
              <CircularIcon size={20} name="dots-horizontal" />
            </TouchableOpacity>
            <TouchableOpacity>
              <CircularIcon size={20} name="head" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setSelectedTab("accepted")}>
            <AppText
              style={{
                fontSize: 18,
                fontWeight: selectedTab === "accepted" ? "bold" : "normal",
                color:
                  selectedTab === "accepted" ? colors.primary : colors.bodyText,
              }}
            >
              Accepted
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedTab("waiting")}>
            <AppText
              style={{
                fontSize: 18,
                fontWeight: selectedTab === "waiting" ? "bold" : "normal",
                color:
                  selectedTab === "waiting" ? colors.primary : colors.bodyText,
              }}
            >
              Waiting Approval
            </AppText>
          </TouchableOpacity>
        </View>

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
        {modalVisible && (
          <AppModal onClose={() => setModalVisibility(false)}>
            <OptionItem />
            <OptionItem />
            <OptionItem />
          </AppModal>
        )}
      </View>

      <View style={styles.footer}>
        <FooterButton disabled={selectedTab === "waiting"} onPress={() => {}}>
          Start Rosca
        </FooterButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  tabText: {
    fontSize: 18,
    color: colors.bodyText,
  },
  activeTabText: {
    fontWeight: "bold",
    color: colors.primary,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.medium,
    paddingTop: 20,
  },
});

export default RoscaDetailsScreen;

import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import colors from "../config/colors";

const Spinner = ({ visible }: { visible: boolean }) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});

export default Spinner;

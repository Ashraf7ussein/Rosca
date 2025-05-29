import React, { ReactNode } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import colors from "../config/colors";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const AppModal = ({ children, onClose }: Props) => {
  return (
    <Modal transparent animationType="slide" onRequestClose={() => {}}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.modalContent}>
        <Pressable onPress={onClose} style={styles.closeIndicatorContainer}>
          <View style={styles.closeIndicator} />
        </Pressable>
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalContent: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeIndicatorContainer: {
    marginTop: 5,
    marginBottom: 30,
    alignItems: "center",
  },
  closeIndicator: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.medium,
  },
});
export default AppModal;

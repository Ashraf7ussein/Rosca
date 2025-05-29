import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import SquareButton from "./SquareButton";

interface Props {
  name: string;
}

const UserDetails2 = ({ name }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftDetails}>
        <View style={styles.userImage} />
        <View>
          <AppText style={styles.username}>{name}</AppText>
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

      <AppText style={{ fontSize: 14, color: colors.medium }}>2d</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
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
});

export default UserDetails2;

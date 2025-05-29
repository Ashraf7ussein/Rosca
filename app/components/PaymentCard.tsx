import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import CircularIcon from "./CircularIcon";
import AppText from "./AppText";
import SquareButton from "./SquareButton";

interface Props {
  label: "paid" | "unpaid" | string;
  name: string;
  month: string;
}

const PaymentCard = ({ label, name, month }: Props) => {
  const getIconName = () => {
    switch (label) {
      case "paid":
        return "check-bold";
      case "unpaid":
        return "close-thick";
      default:
        return "arrow-right-thick";
    }
  };

  const getIconColor = () => {
    switch (label) {
      case "paid":
        return colors.active;
      case "unpaid":
        return colors.danger;
      default:
        return colors.primary;
    }
  };

  const getLabelText = () => {
    switch (label) {
      case "paid":
        return "Paid To";
      case "unpaid":
        return "Unpaid To";
      default:
        return "Pre pay To";
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <CircularIcon size={12} name={getIconName()} color={getIconColor()} />
        <View>
          <AppText style={styles.text}>{getLabelText()}</AppText>
          <AppText style={styles.value}>{name}</AppText>
        </View>
      </View>

      <View>
        <AppText style={styles.text}>Due Month</AppText>
        <AppText style={styles.value}>{month}</AppText>
      </View>

      {label !== "paid" && (
        <SquareButton textColor={colors.black} onPress={() => {}}>
          {label === "unpaid" ? "Pay" : "Pre pay"}
        </SquareButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.dark,
  },
  value: {
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.black,
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
});

export default PaymentCard;

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Enter: undefined;
  FormScreen: { rosca?: any };
  Join: undefined;
  InviteScreen: undefined;
  ReasonsScreen: undefined;
  OtpScreen: undefined;
  BillScreen: undefined;
  PaymentConfirmationScreen: undefined;
  Home: { userRoscas: any[] };
  RoscaDetailsScreen: { rosca: any };
  PaymentsScreen: { rosca: any };
  MembersScreen: { Members: any[] };
};

const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export default useAppNavigation;

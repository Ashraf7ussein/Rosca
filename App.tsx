import EnterScreen from "./app/screens/EnterScreen";
import InviteScreen from "./app/screens/InviteScreen";
import FormScreen from "./app/screens/FormScreen";
import HomeScreen from "./app/screens/HomeScreen";
import RoscaDetailsScreen from "./app/screens/RoscaDetailsScreen";
import MembersScreen from "./app/screens/MembersScreen";
import ScanQrScreen from "./app/components/ScanQrScreen";
import PaymentsScreen from "./app/screens/PaymentsScreen";
import PaymentConfirmationScreen from "./app/screens/PaymentlConfirmationScreen";
import PaymentScreen from "./app/screens/PaymentScreen";
import OtpScreen from "./app/screens/OtpScreen";
import BillScreen from "./app/screens/BillScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Enter" component={EnterScreen} />
    <Stack.Screen name="Create" component={FormScreen} />
    <Stack.Screen name="Join" component={ScanQrScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

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

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Enter Screen">
    <Stack.Screen name="Enter Screen" component={EnterScreen} />
    <Stack.Screen name="Create Rosca" component={FormScreen} />
    <Stack.Screen name="Join Rosca" component={ScanQrScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

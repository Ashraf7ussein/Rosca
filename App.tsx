import EnterScreen from "./app/screens/EnterScreen";
import InviteScreen from "./app/screens/InviteScreen";
import FormScreen from "./app/screens/FormScreen";
import HomeScreen from "./app/screens/HomeScreen";
import RoscaDetailsScreen from "./app/screens/RoscaDetailsScreen";
import MembersScreen from "./app/screens/MembersScreen";
import ScanQrScreen from "./app/components/ScanQrScreen";
import PaymentsScreen from "./app/screens/PaymentsScreen";
import PaymentConfirmationScreen from "./app/screens/PaymentlConfirmationScreen";
import OtpScreen from "./app/screens/OtpScreen";
import BillScreen from "./app/screens/BillScreen";
import ReasonsScreen from "./app/screens/ReasonsScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import AuthProvider from "./app/services/authContext";
import { RootStackParamList } from "./app/hooks/useAppNavigation";
import Toast from "react-native-toast-message";
import AdminSelectScreen from "./app/screens/AdminSelectScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Enter" component={EnterScreen} />
    <Stack.Screen
      name="FormScreen"
      component={FormScreen}
      options={{ title: "Create New Rosca" }}
    />
    <Stack.Screen name="Join" component={ScanQrScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="RoscaDetailsScreen"
      component={RoscaDetailsScreen}
      options={{ title: "Rosca Details" }}
    />
    <Stack.Screen
      name="PaymentsScreen"
      component={PaymentsScreen}
      options={{ title: "My Payments" }}
    />
    <Stack.Screen name="MembersScreen" component={MembersScreen} />
    <Stack.Screen name="InviteScreen" component={InviteScreen} />
    <Stack.Screen
      name="AdminSelectScreen"
      component={AdminSelectScreen}
      options={{ title: "Select New Admin" }}
    />
    <Stack.Screen
      name="OtpScreen"
      component={OtpScreen}
      options={{ title: "" }}
    />
    <Stack.Screen
      name="BillScreen"
      component={BillScreen}
      options={{ title: "Bill Payed" }}
    />
    <Stack.Screen
      name="ReasonsScreen"
      component={ReasonsScreen}
      options={{ title: "" }}
    />
    <Stack.Screen
      name="PaymentConfirmationScreen"
      component={PaymentConfirmationScreen}
      options={{ title: "Confirm Payment" }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
        <Toast />
      </NavigationContainer>
    </AuthProvider>
  );
}

interface Rosca {
  name: string;
  badgeLabel: string;
  endingDate: string;
  startingDate: string;
  monthlyAmount: string;
  totalAmount: string;
  _id: string;
}

export type RootStackParamList = {
  Login: undefined;
  Enter: undefined;
  Create: undefined;
  Join: undefined;
  Home: { userRoscas: any[] }; // or a more specific type
  RoscaDetailsScreen: undefined;
};

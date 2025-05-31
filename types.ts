export default interface Payment {
  to: string;
  month: string;
  paymentStatus: string;
}

export default interface Member {
  _id: string;
  name: string;
  isAdmin: boolean;
  memberPaymentStatus: string;
  totalPayments: number;
  memberOrder: string;
  memberStatus: string;
  assignedDate: string;
  payments: Payment[];
}

export default interface Rosca {
  _id: string;
  name: string;
  badgeLabel: string;
  endingDate: string;
  startingDate: string;
  monthlyAmount: string;
  totalAmount: string;
  membersArray: any[];
}

export type RootStackParamList = {
  Login: undefined;
  Enter: undefined;
  Create: undefined;
  Join: undefined;
  Home: { userRoscas: any[] };
  RoscaDetailsScreen: { rosca: any };
};

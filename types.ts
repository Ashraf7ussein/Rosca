export interface Payment {
  toUserName: string;
  toUserId: string;
  month: string;
  paymentStatus: string;
}

export interface Member {
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

export interface Rosca {
  _id: string;
  name: string;
  badgeLabel: string;
  endingDate: string;
  startingDate: string;
  monthlyAmount: string;
  totalAmount: string;
  membersArray: Member[];
  roscaStatus: string;
}

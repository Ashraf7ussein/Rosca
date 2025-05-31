import React from "react";
import { ScrollView } from "react-native";
import UserDetails from "./UserDetails";
import UserDetails2 from "./UserDetails2";

interface Props {
  selectedTab: string;
  onSelectMember: (member: any) => void;
  membersArray: Member[];
}

interface Member {
  name: string;
  isAdmin: boolean;
  memberPaymentStatus: string;
  totalPayments: number;
  memberOrder: string;
  memberStatus: string;
  _id: string;
  currentMonthPaymentStatus: string;
  assignedDate: string;
}

const MembersList = ({ selectedTab, onSelectMember, membersArray }: Props) => {
  return (
    <ScrollView>
      {selectedTab === "accepted" ? (
        <>
          {membersArray &&
            membersArray.map((member) => (
              <UserDetails
                key={member._id}
                name={member.name}
                date={member.assignedDate}
                badgeLabel={member.memberStatus}
                memberOrder={member.memberOrder}
                onPress={() => onSelectMember(member)}
              />
            ))}
        </>
      ) : (
        <>
          <UserDetails2 name="this is th ena" />
          <UserDetails2 name="email" />
        </>
      )}
    </ScrollView>
  );
};

export default MembersList;

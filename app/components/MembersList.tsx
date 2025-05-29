import React from "react";
import { ScrollView } from "react-native";
import UserDetails from "./UserDetails";
import UserDetails2 from "./UserDetails2";

interface Props {
  selectedTab: string;
  onSelectMember: (member: any) => void;
}

const members = [
  {
    id: "1",
    name: "this is the first",
    date: "1/1/2001",
    badgeLabel: "unpaid",
    order: "1",
  },
  {
    id: "2",
    name: "this is the second",
    date: "1/3/2001",
    badgeLabel: "paid",
    order: "2",
  },
];

const MembersList = ({ selectedTab, onSelectMember }: Props) => {
  return (
    <ScrollView>
      {selectedTab === "accepted" ? (
        <>
          {members.map((member) => (
            <UserDetails
              key={member.id}
              name={member.name}
              date={member.date}
              badgeLabel={member.badgeLabel}
              order={member.order}
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

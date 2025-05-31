import { UserCredential } from "firebase/auth";

export type RootStackParamList = {
  Create: undefined; // undefined means have no params
  Join: undefined;
  Enter: { user: UserCredential };
};

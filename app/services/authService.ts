import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

//  Map Firebase error codes to user-friendly messages
const getFriendlyErrorMessage = (code: string): string => {
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already in use. Please use a different email.";
    case "auth/invalid-email":
      return "The email address is invalid. Please check and try again.";
    case "auth/weak-password":
      return "The password is too weak. Please choose a stronger password.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/invalid-credential":
      return "Invalid email or password. Please check and try again.";
    default:
      return "An unexpected error occurred. Please try again later.";
  }
};

export const signUp = async (
  email: string,
  password: string,
  name?: string
): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (auth.currentUser && name) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
    return userCredential;
  } catch (error: any) {
    const friendlyMessage = getFriendlyErrorMessage(error.code);
    throw new Error(friendlyMessage);
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error: any) {
    const friendlyMessage = getFriendlyErrorMessage(error.code);
    throw new Error(friendlyMessage);
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    const friendlyMessage = getFriendlyErrorMessage(error.code);
    throw new Error(friendlyMessage);
  }
};

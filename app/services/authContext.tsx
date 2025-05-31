import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../../firebaseConfig";

interface AuthContextType {
  user: User | null;
}

interface Props {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

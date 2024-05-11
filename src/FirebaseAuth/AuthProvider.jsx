import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const loginUser =(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logoutUser =()=>{
    return signOut(auth)
  }
  const authInfo = {registerUser,loginUser,logoutUser};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const loginUserWithGoogle =()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const loginUser =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logoutUser =()=>{
    setLoading(true)
    return signOut(auth)
  }
  const updateUser =(name,photoUrl)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName: name ,photoURL : photoUrl
    })
  }
  useEffect(()=>{
    const unSubscribe= ()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        
    }
    return ()=>unSubscribe()
  },[])
  const authInfo = {registerUser,loginUser,logoutUser,loading,user,updateUser,loginUserWithGoogle,setUser,setLoading};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

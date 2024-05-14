import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

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
          setLoading(false)
          setUser(currentUser)
          const userEmail =   currentUser?.email || user?.email
          const loggedUser = {email:userEmail}

          if(currentUser){
               axios.post('https://knowledge-hub-server-jkskb25-gmailcom-jamanul-sakibs-projects.vercel.app/jwt',loggedUser,{withCredentials:true})
          .then(res=>{console.log(res.data)
            
          })
          setLoading(false)
          }
          else{
              axios.post('https://knowledge-hub-server-jkskb25-gmailcom-jamanul-sakibs-projects.vercel.app/logout',loggedUser,{withCredentials:true})
              .then(res=>{console.log(res.data)
               
              })
              setLoading(false)
          }
          setLoading(false)
          console.log(loading)
        })
    }
    return ()=>unSubscribe()
  },[loading, user?.email])
  const authInfo = {registerUser,loginUser,logoutUser,loading,user,updateUser,loginUserWithGoogle,setUser,setLoading};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

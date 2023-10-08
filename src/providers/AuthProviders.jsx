/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
        console.log('user state changed', user);
        setUser(user);
    });
    return () => unSubscribe();
  }, [])


  const authInfo = { user, registerUser, loginUser, logOut };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

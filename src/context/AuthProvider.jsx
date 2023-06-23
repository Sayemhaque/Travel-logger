/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AUTH_CONTEXT = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

   
    //login user by google accout
    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    //create a new user
    const createUserFirebase = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

   //updating a user profile
    const updateProfileFirbase = (name,photoUrl) => {
        return updateProfile(auth.currentUser , {displayName:name,photoURL:photoUrl})
    }

    // login a user 
    const logInFirebase = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
    }
    // log out a user
    const logOut = () => {
        return signOut(auth)
    }
   // observeing the user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return () => {
            unsubscribe()
        }
    } , [])
    
    
    const authenticationInfo = {
        user,
        loading,
        logOut,
        logInFirebase,
        logInWithGoogle,
        createUserFirebase,
        updateProfileFirbase
    }
    return (
        <AUTH_CONTEXT.Provider value={authenticationInfo}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;
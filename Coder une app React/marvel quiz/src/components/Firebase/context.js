import React, {createContext, useState}  from "react";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import Firebase, { auth } from "./firebase";

export const FirebaseContext = createContext()

export default FirebaseContext;
/* 
export function FirebaseContextProvider (props) {
    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(email, password)
    }

    const signoutUser = () => {
        signOut()
    }
    return (
        <FirebaseContext.Provider value={{signup}}>
            {props.children}
        </FirebaseContext.Provider>
    ) 
    
}

 */
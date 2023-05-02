import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])

    //auth
    const auth = getAuth(app)

    //register with email password
    const registerWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // google popup login
    const googleProvider = new GoogleAuthProvider();
    const googlePopupLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //github popup login
    const githubProvider = new GithubAuthProvider();
    const githubPopupLogin = () => {
        return signInWithPopup( auth, githubProvider)
    }

    //login with enter email and password


    //on state change observer
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => unsubscribe();
    },[])


    //logout
    const logoutUser = () => {
        return signOut(auth)
    }

    // context send data 
    const authInfo = {
        user,
        googlePopupLogin,
        githubPopupLogin,
        registerWithEmailPass,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
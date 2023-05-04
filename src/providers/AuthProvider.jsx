import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    //auth
    const auth = getAuth(app)

    //register with email password
    const registerWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateRegisterProfile = (displayName, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoUrl,
        })
    }

    //login with email password
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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


    //on state change observer
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            // set spinner 
            setLoader(false)
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
        loader,
        googlePopupLogin,
        githubPopupLogin,
        registerWithEmailPass,
        updateRegisterProfile,
        loginWithEmailPass,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
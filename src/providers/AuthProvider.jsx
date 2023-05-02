import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])

    //auth
    const auth = getAuth(app)

    // google popup login
    const googleProvider = new GoogleAuthProvider();
    const googlePopupLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //login with enter email and password


    //on state change observer
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    },[])

    // context send data 
    const authInfo = {
        user,
        googlePopupLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
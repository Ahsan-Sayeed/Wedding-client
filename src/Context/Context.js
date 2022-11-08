import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import {getAuth, onAuthStateChanged, GoogleAuthProvider,GithubAuthProvider, signInWithPopup , signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut } from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext();

const Context = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider();
    const gitHubAuthProvider = new GithubAuthProvider();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setLoading(false);
            setUser(user);
        });
        return ()=>{
            unsubscribe();
        };
    },[]);

    const signInWithGoogle = () => {
        
        return signInWithPopup(auth,googleAuthProvider);
    }

    const signInWitGit = () => {
       
        return signInWithPopup(auth,gitHubAuthProvider)
    };

    const signInWithEmail = (email,password) =>{
        
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const createUser = (email,password) =>{

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{

        return signOut(auth);
    }

    const userInfo = {user,loading,signInWithGoogle,signInWitGit,signInWithEmail,createUser,logOut};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;
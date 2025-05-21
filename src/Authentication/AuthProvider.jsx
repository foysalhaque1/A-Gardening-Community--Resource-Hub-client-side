import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    console.log(loading,user)
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const logOut = () =>{
        return signOut(auth)
    };
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    };
const updateUser = (updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
}
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const authData = {
        googleSignIn,
        createUser,
        user,
        setUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser
    };



    return (
        <div>
            <AuthContext value={authData}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;
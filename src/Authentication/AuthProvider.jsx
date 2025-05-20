import React from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const  googleProvider = new GoogleAuthProvider();
 const googleSignIn = () =>{
    return signInWithPopup(auth,googleProvider);
 }

 const authData = {
    googleSignIn
 }
   

    return (
        <div>
            <AuthContext value={authData}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;
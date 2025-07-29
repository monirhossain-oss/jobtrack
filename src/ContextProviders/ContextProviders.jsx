import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const ContextProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logoutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email);
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
            // console.log(currentUser);
        })
        return () =>{
            unSubscribe();
        }
    })
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        googleLogin,
        resetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProviders;
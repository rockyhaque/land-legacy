import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider;
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        googleLogin,
        loginUser,
        logout
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
              setUser(currentUser);
            } else{
              setUser(null);
            }
          });

          return () => {
            unsubscribe()
          }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
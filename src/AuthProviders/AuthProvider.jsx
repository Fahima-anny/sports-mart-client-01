import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null) ;

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

const [user, setUser] = useState(null) ;
const [loading, setLoading] = useState(true) ;
const [profile, setProfile] = useState(null) ;
// const [allMyData,setAllMyData] = useState(null)


    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // create new user 
    const registerUser = (email, pass) => {
        setLoading(true) ;
        return createUserWithEmailAndPassword(auth, email, pass) ;
    }

    // update user info 
const updateUser = (updatedInfo) => {
    return updateProfile(auth.currentUser, updatedInfo) ;
}

// log in user 
const login =(email,pass) => {
    setLoading(true) ;
    return signInWithEmailAndPassword(auth, email, pass) ;
}

// sign in with google 
const googleSignIn = () => {
    setLoading(true) ;
    return signInWithPopup(auth , googleProvider) ;
}

// sign out user 
const signout = () => {
    setLoading(true) ;
    return signOut(auth) ;
}

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser) ;
            setProfile(currentUser?.photoURL)
            setLoading(false) ;
            // console.log("current user is : ", currentUser) ;
            // fetch(`https://sports-mart-server-gamma.vercel.app/equipments/user/${currentUser.email}`)
            // setAllMyData(loadedData) ;
        })
        return () => unSubscribe() ;
    } ,[auth])

const authInfo = {
    registerUser,
user,
setUser,
loading,
updateUser,
signout,
profile,
login,
setProfile,
googleSignIn,
// allMyData,
// setAllMyData
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
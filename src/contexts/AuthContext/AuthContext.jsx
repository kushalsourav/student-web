import { createContext, useContext, useEffect, useReducer } from "react";
import AuthReducer from "../../reducers/AuthReducer/AuthReducer";

const initalAuthState = {
    name: '',
    dateofbirth: '',
    course: '',
    yearofjoining: '',
    interests: '',
    hobbies: '',
    currentaddress: '',
    permanentaddress: '',
    password: '',
    confirmpassword: '',
    login : false,
    studentData : [],
    activeUser: {

    }
};



const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    
    useEffect(() => {
    localStorage.removeItem("students")
    localStorage.removeItem("groups")
    localStorage.removeItem("invitations")
    },[])

    const [authState, authDispatch] = useReducer(AuthReducer, initalAuthState);
    return(
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, useAuth};
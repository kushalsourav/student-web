
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "../componenets/Form/Form";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useEffect } from "react";

const SignIn = () => {
    const {authDispatch, authState} = useAuth();
    console.log(authState.studentData)
    let navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const getUser = authState.studentData.find((user, i) => user.name === authState.name)
        console.log(getUser)
        if(getUser.password === authState.password) {
            authDispatch({type:"LOGIN", login:true})
            navigate("/")
        }
    }
    useEffect(() => {
        const getStudent = localStorage.getItem("students")
        authDispatch({type:"STU_DATA", stuData:JSON.parse(getStudent)})
    },[])
    return(
        <>
            <Form onHandleSubmit={handleLogin} authState={authState} authDispatch={authDispatch}  /> 
            <div className="form-box">
               <div className="form-btn">
                 <Link to='/SignUp'><button className="btn btn-primary-outline btn-large">Sign up</button></Link> 
               </div>
            </div>
        </>
    );
};

export default SignIn;

import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "../componenets/Form/Form";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useEffect } from "react";
import { useData } from "../contexts/DataContext/DataContext";

const SignIn = () => {
    const {authDispatch, authState} = useAuth();
    const {data} = useData()
  
    let navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const getUser = authState.studentData.find((user, i) => user.name === authState.name)
        console.log(getUser)
        if(getUser.password === authState.password) {
            authDispatch({type:"LOGIN", login:true})
            authDispatch({type:"ACTIVE_USER", activeuser:getUser})
            navigate("/home")
        }
    }
    const guestLogin = (e) =>{
        e.preventDefault();
        const getUser = authState.studentData.find((user, i) => user.name === "John Doe")
        if(getUser.password === "password123") {
            authDispatch({type:"LOGIN", login:true})
            authDispatch({type:"ACTIVE_USER", activeuser:getUser})
            navigate("/home")
        }
    }
    useEffect(() => {
        let studentsJson = JSON.parse(localStorage.getItem('students')) || data.data;
        localStorage.setItem('students', JSON.stringify(studentsJson));
      
        const getStudent = localStorage.getItem("students")
        authDispatch({type:"STU_DATA", stuData:JSON.parse(getStudent)})
    },[])
    return(
        <div>
            <div className="form-box">
            <h2>Sign in</h2>
            <Form onHandleSubmit={handleLogin} authState={authState} authDispatch={authDispatch} type={data.formType}  /> 
               <div className="form-btn">
               <button className="btn btn-primary-outline btn-large" onClick={(e) => guestLogin(e)}>guest login</button>
                 <Link to='/SignUp'><button className="btn btn-primary-outline btn-large">Sign up</button></Link> 
               </div>
            </div>
        </div>
    );
};

export default SignIn;
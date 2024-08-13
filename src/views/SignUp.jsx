
import { useNavigate } from "react-router-dom";
import Form from "../componenets/Form/Form";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useEffect } from "react";
import { useData } from "../contexts/DataContext/DataContext";


  
const SignUp = () => {
    const {authState, authDispatch} = useAuth();
    const {data} = useData();
    const navigate = useNavigate();



    const getUserInputs = async (e) => {

        e.preventDefault();

        if(Number(authState.password) === Number(authState.confirmPassword)) {
            const studentData = {
                name: authState.name,
                dateofbirth: authState.dateofbirth,
                course: authState.course,
                yearofjoining: authState.yearofjoining,
                interests: authState.interests.split(' '),
                hobbies: authState.hobbies.split(' '),
                currentaddress: authState.currentaddress,
                permanentaddress: authState.permanentaddress,
                password: authState.password
            }
            let studentsJson = JSON.parse(localStorage.getItem('students')) || data.data;
            studentsJson.push(studentData);
            localStorage.setItem('students', JSON.stringify(studentsJson));
            const getStudent = localStorage.getItem("students")
            authDispatch({type:"STU_DATA", stuData:JSON.parse(getStudent)})
            authDispatch({type:"CLEAR_INPUTS"});
            navigate('/SignIn');
        } else {
            alert("wrong password")
        }
    };

    useEffect(() => {
        const getStudent = localStorage.getItem("students")
        console.log(JSON.parse(getStudent))
    },[getUserInputs])
    return(
        <div className="form-box">
        <h2>Signup</h2>
        <Form onHandleSubmit={getUserInputs} authState={authState}  authDispatch={authDispatch} type={data.formType} />
        </div>
    )
};

export default SignUp;
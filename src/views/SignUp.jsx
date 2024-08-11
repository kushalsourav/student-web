
import { useNavigate } from "react-router-dom";
import Form from "../componenets/Form/Form";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useEffect } from "react";

const data = 
[
    {
      "name": "John Doe",
      "dateofbirth": "2000-01-15",
      "course": "Computer Science",
      "yearofjoining": 2018,
      "interests": ["AI","Web Development", "Machine Learning"],
      "hobbies": ["Reading", "Cycling"],
      "currentaddress": "123 Elm Street, Springfield",
      "permanentaddress": "456 Oak Avenue, Metropolis",
      "password": "password123"
    },
    {
      "name": "Jane Smith",
      "dateofbirth": "1999-07-22",
      "course": "Electrical Engineering",
      "yearofjoining": 2017,
      "interests": ["Robotics","Web Development", "Circuit Design"],
      "hobbies": ["Photography", "Swimming"],
      "currentaddress": "789 Pine Road, Gotham",
      "permanentaddress": "101 Maple Street, Star City",
      "password": "securePass456"
    },
    {
      "name": "Alice Johnson",
      "dateofbirth": "2001-03-11",
      "course": "Mechanical Engineering",
      "yearofjoining": 2019,
      "interests": ["Automobile Design","Web Development", "Thermodynamics"],
      "hobbies": ["Hiking", "Drawing"],
      "currentaddress": "202 Birch Lane, Central City",
      "permanentaddress": "303 Cedar Boulevard, Smallville",
      "password": "password789"
    },
    {
      "name": "Bob Lee",
      "dateofbirth": "2000-05-09",
      "course": "Information Technology",
      "yearofjoining": 2018,
      "interests": ["Web Development", "Cloud Computing"],
      "hobbies": ["Gaming", "Cooking"],
      "currentaddress": "404 Walnut Street, Coast City",
      "permanentaddress": "505 Spruce Avenue, Keystone City",
      "password": "myPass123"
    },
    {
      "name": "Charlie Brown",
      "dateofbirth": "1998-12-25",
      "course": "Civil Engineering",
      "yearofjoining": 2016,
      "interests": ["Structural Design", "Urban Planning"],
      "hobbies": ["Chess", "Running"],
      "currentaddress": "606 Willow Drive, Blüdhaven",
      "permanentaddress": "707 Sycamore Road, Hub City",
      "password": "passWord456"
    },
    {
      "name": "Daisy Miller",
      "dateofbirth": "2001-10-18",
      "course": "Biotechnology",
      "yearofjoining": 2019,
      "interests": ["Genetics", "Bioprocess Engineering"],
      "hobbies": ["Painting", "Yoga"],
      "currentaddress": "808 Palm Street, Fawcett City",
      "permanentaddress": "909 Chestnut Lane, Opal City",
      "password": "biotech123"
    },
    {
      "name": "Ethan Hunt",
      "dateofbirth": "1999-02-04",
      "course": "Aerospace Engineering",
      "yearofjoining": 2017,
      "interests": ["Rocket Propulsion", "Aerodynamics"],
      "hobbies": ["Skydiving", "Traveling"],
      "currentaddress": "1010 Ash Avenue, Starling City",
      "permanentaddress": "1111 Elm Street, Ivy Town",
      "password": "missionImpossible"
    },
    {
      "name": "Fiona Davis",
      "dateofbirth": "2000-11-12",
      "course": "Chemical Engineering",
      "yearofjoining": 2018,
      "interests": ["Process Engineering", "Materials Science"],
      "hobbies": ["Cooking", "Reading"],
      "currentaddress": "1212 Poplar Road, Midway City",
      "permanentaddress": "1313 Oak Lane, Happy Harbor",
      "password": "chemEng2020"
    },
    {
      "name": "George Adams",
      "dateofbirth": "1998-09-30",
      "course": "Mathematics",
      "yearofjoining": 2016,
      "interests": ["Number Theory", "Cryptography"],
      "hobbies": ["Puzzles", "Chess"],
      "currentaddress": "1414 Beech Street, Central City",
      "permanentaddress": "1515 Pine Avenue, Coast City",
      "password": "mathWhiz123"
    },
    {
      "name": "Hannah Baker",
      "dateofbirth": "2001-06-06",
      "course": "Physics",
      "yearofjoining": 2019,
      "interests": ["Quantum Mechanics", "Astrophysics"],
      "hobbies": ["Stargazing", "Swimming"],
      "currentaddress": "1616 Cedar Boulevard, Smallville",
      "permanentaddress": "1717 Birch Lane, Blüdhaven",
      "password": "physicsRocks"
    },
    {
      "name": "Ivan Brooks",
      "dateofbirth": "1999-01-23",
      "course": "Chemical Engineering",
      "yearofjoining": 2017,
      "interests": ["Polymer Science", "Environmental Engineering"],
      "hobbies": ["Gardening", "Cooking"],
      "currentaddress": "1818 Sycamore Road, Hub City",
      "permanentaddress": "1919 Spruce Avenue, Keystone City",
      "password": "chemMaster456"
    },
    {
      "name": "Jack White",
      "dateofbirth": "2000-08-15",
      "course": "Electrical Engineering",
      "yearofjoining": 2018,
      "interests": ["Power Systems", "Control Systems"],
      "hobbies": ["Cycling", "Photography"],
      "currentaddress": "2020 Willow Drive, Coast City",
      "permanentaddress": "2121 Maple Street, Star City",
      "password": "elecEng2021"
    },
    {
      "name": "Kira Stone",
      "dateofbirth": "2001-04-14",
      "course": "Biotechnology",
      "yearofjoining": 2019,
      "interests": ["Bioinformatics", "Genomics"],
      "hobbies": ["Yoga", "Hiking"],
      "currentaddress": "2222 Palm Street, Fawcett City",
      "permanentaddress": "2323 Poplar Road, Midway City",
      "password": "bioTechRocks"
    },
    {
      "name": "Liam Taylor",
      "dateofbirth": "1998-05-21",
      "course": "Mechanical Engineering",
      "yearofjoining": 2016,
      "interests": ["Fluid Mechanics", "Thermal Engineering"],
      "hobbies": ["Drawing", "Running"],
      "currentaddress": "2424 Chestnut Lane, Opal City",
      "permanentaddress": "2525 Ash Avenue, Starling City",
      "password": "mechEngineer"
    },
    {
      "name": "Mia Clark",
      "dateofbirth": "2000-02-17",
      "course": "Information Technology",
      "yearofjoining": 2018,
      "interests": ["Cybersecurity", "Data Analytics"],
      "hobbies": ["Gaming", "Traveling"],
      "currentaddress": "2626 Elm Street, Ivy Town",
      "permanentaddress": "2727 Oak Lane, Happy Harbor",
      "password": "techGuru123"
    },
    {
      "name": "Noah Green",
      "dateofbirth": "1999-10-11",
      "course": "Civil Engineering",
      "yearofjoining": 2017,
      "interests": ["Structural Analysis", "Geotechnical Engineering"],
      "hobbies": ["Chess", "Reading"],
      "currentaddress": "2828 Pine Avenue, Coast City",
      "permanentaddress": "2929 Maple Street, Star City",
      "password": "civilEng123"
    },
    {
      "name": "Olivia Black",
      "dateofbirth": "2001-01-29",
      "course": "Mathematics",
      "yearofjoining": 2019,
      "interests": ["Algebra", "Topology"],
      "hobbies": ["Puzzles", "Photography"],
      "currentaddress": "3030 Birch Lane, Central City",
      "permanentaddress": "3131 Cedar Boulevard, Smallville",
      "password": "mathGenius"
    },
    {
      "name": "Paul Gray",
      "dateofbirth": "2000-06-03",
      "course": "Physics",
      "yearofjoining": 2018,
      "interests": ["Optics", "Nuclear Physics"],
      "hobbies": ["Stargazing", "Cycling"],
      "currentaddress": "3232 Sycamore Road, Hub City",
      "permanentaddress": "3333 Spruce Avenue, Keystone City",
      "password": "physicsMaster"
    },
    {
      "name": "Quinn Fox",
      "dateofbirth": "1998-08-28",
      "course": "Computer Science",
      "yearofjoining": 2016,
      "interests": ["AI", "Blockchain"],
      "hobbies": ["Programming", "Running"],
      "currentaddress": "3434 Willow Drive, Blüdhaven",
      "permanentaddress": "3535 Elm Street, Ivy Town",
      "password": "aiExpert2020"
    },
    {
      "name": "Riley Moore",
      "dateofbirth": "2001-09-19",
      "course": "Aerospace Engineering",
      "yearofjoining": 2019,
      "interests": ["Spacecraft Design", "Propulsion Systems"],
      "hobbies": ["Skydiving", "Yoga"],
      "currentaddress": "3636 Oak Lane, Happy Harbor",
      "permanentaddress": "3737 Maple Street, Starling City",
      "password": "spaceEngineer"
    }
  ]
  
const SignUp = () => {
    const {authState, authDispatch} = useAuth();
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
            let studentsJson = JSON.parse(localStorage.getItem('students')) || data;
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
        <>
        <Form onHandleSubmit={getUserInputs} authState={authState}  authDispatch={authDispatch}  />
        </>
    )
};

export default SignUp;
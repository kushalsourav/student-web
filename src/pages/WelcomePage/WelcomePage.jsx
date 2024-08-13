import React, { useState } from 'react';
import {useData} from "../../contexts/DataContext/DataContext"
import Welcome from '../../componenets/Welcome/Welcome';
import "./WelcomePage.css";
import welcomeImage from "../../asets/img/student.png"
import SignIn from '../../views/SignIn';
import SignUp from '../../views/SignUp';

const WelcomePage = () => {
    const {data, setData} = useData();
    const [toggle, setToggle] = useState(false)
    return (
        <div  className="grid grid-1-2">
              <Welcome setData={setData} toggle={toggle} setToggle={setToggle} formType={data.formType} />
        <div className="welcome-form">
          {data.formType === 'signin' && toggle && <SignIn />}
          { data.formType === 'signup'&& toggle   &&  <SignUp />}
          {!toggle && <img src={welcomeImage} className="img-responsive welcome-image" alt="welcomeimage" />} 
        </div>
        </div>
    );
}

export default WelcomePage;

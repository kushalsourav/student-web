import Input from "../Input/Input";
import './Form.css';


const Form = ({ authState, authDispatch, onHandleSubmit, passVisible, setPassVisible, error ,type}) => {


    let form;
    let date = "date"
    switch (type) {
        case 'signin':
            form =   <>
                       <Input name="name" placeholder="Enter your name" id="name" value={authState.name} setInput={authDispatch} />
            <Input name="password" placeholder="Enter your password" id="password" value={authState.password} setInput={authDispatch} passVisible={passVisible}
                setPassVisible={setPassVisible} />
           </>
            break;
        case 'signup':
            form = <>
                      <Input name="name" placeholder="Enter your name" id="name" value={authState.name} setInput={authDispatch} error={error} />
            <Input name="course" placeholder="Enter your course" id="course" value={authState.course} setInput={authDispatch} error={error} />
            <Input name="dateofbirth" placeholder="Enter your date of birth" id="dateofbirth" value={authState.dateofbirth} setInput={authDispatch} error={error} inputType={date} />
            <Input name="yearofjoining" placeholder="Enter your year of joining" id="yearofjoining" value={authState.yearofjoining} setInput={authDispatch} error={error} />
            <Input name="interests" placeholder="Enter your interests" id="interests" value={authState.interests} setInput={authDispatch} error={error} />
            <Input name="hobbies" placeholder="Enter your hobbies" id="hobbies" value={authState.hobbies} setInput={authDispatch} error={error} />
            <Input name="currentaddress" placeholder="Enter your current address" id="currentaddress" value={authState.currentaddress} setInput={authDispatch} error={error} />
            <Input name="permanentaddress" placeholder="Enter your permanent address" id="permanentaddress" value={authState.permanentaddress} setInput={authDispatch} error={error} />
            <Input name="password" placeholder="Enter your password" value={authState.password} id="password" setInput={authDispatch} passVisible={passVisible} setPassVisible={setPassVisible} error={error} />
            <Input name="confirmPassword" placeholder="Confirm your password" value={authState.confirmPassword} id="confirmpassword" setInput={authDispatch} passVisible={passVisible} setPassVisible={setPassVisible} error={error} />
           </>
            break;
        default:
            break;
    }
    return(
        <>
        <form className="form-box" onSubmit={onHandleSubmit}>
              {form}
            <div className="form-btn">
                 <button className="btn cta-btn btn-large btn-primary-outline">submit</button> 
            </div>
        </form>
        </>
    )
};

export default Form;
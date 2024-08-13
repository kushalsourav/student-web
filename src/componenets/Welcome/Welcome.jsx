import './Welcome.css';
const Welcome = ({setData, toggle, setToggle, formType}) => {
    return(
        <>
        <div className='welcome'>
            <div className='welcome-title'>
                    <p className='header-primary'>Student</p>
                    <p className='header-secondary'>Connect</p>
            </div>
          
            <div className='welcome-authenticate'>
                <span><button className=' btn btn-primary' onClick={() => {
                    setData({type:"FORM_TYPE", formType:'signup'});
                    setToggle((toggle) => !toggle);
                    }}>{toggle && formType === 'signup' ? "close form" : "Join Now"}</button></span>
                <span><button className='welcome-button-text' onClick={() => {
                    setData({type:"FORM_TYPE", formType:'signin'});
                    setToggle((toggle) => !toggle);
                    }}>{toggle && formType === 'signin' ? "close form" :"Already have an account?"}</button></span>  
            </div>
        </div>
        </>
    );
};

export default Welcome;
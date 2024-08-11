const AuthReducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        console.log(action.name)
          return {...state, [action.name] : action.input};
      case "CLEAR_INPUTS":
          return {...state, email:'', password:'', firstName:'',lastName:'', confirmPassword:''};
      case "LOGIN":
          return {...state, login: action.login};
    case "STU_DATA":
            return {...state, studentData: action.stuData};
      default:
          return state;
    }
};

export default AuthReducer;
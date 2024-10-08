const DataReducer = (state, action) => {
    switch (action.type) {
       case "FORM_TYPE":
              return {...state, formType: action.formType};
       case "SEARCH" :
              return {...state, search: action.search}
       case "FILTER" : 
       return {...state, filterText: action.filter}
       case "SET_INTREST" : return {...state, interests: action.interests}
       case "USER" : return {...state, users: action.users}
       case "GROUP": return {...state, groups: state.groups.concat(action.groups)}
       case "INVIT": return {...state, invitations: state.invitations.concat(action.invite)}
       case "INTREST" : return {...state, interest: action.interest}
       default:
              return state;
    };
};

export default DataReducer;
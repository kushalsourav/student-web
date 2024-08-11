import { createContext, useContext, useEffect ,useReducer } from "react";
import DataReducer from "../../reducers/DataReducer/DataReducer";
const initalDataState = {
    search : "",
    filter: "",
    filterLists: ['name', 'dateofbirth', 'yearofjoin', 'course', 'interests', 'hobbies', 'currentaddress', 'permanentaddress'],
    users: [],
    groups: [],
    invitations: [],
    interest: "",
    interests: []
}

const DataContext = createContext();
const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
    const [data , setData] = useReducer(DataReducer, initalDataState);

    return(
        <>
        <DataContext.Provider value={{setData, data}}>
            {children}
        </DataContext.Provider>
        </>
    )
};
export {DataProvider, useData};
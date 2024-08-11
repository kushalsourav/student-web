import React, { useEffect } from 'react';
import SearchBar from '../../componenets/SearchBar/SearchBar';
import { useData } from '../../contexts/DataContext/DataContext';
import Card from '../../componenets/Card/Card';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';

const Home = () => {
    const {data, setData} = useData();
    const {authState} = useAuth();

    console.log(authState.studentData)
    console.log(data)
    useEffect(() => {
setData({type:"USER", users: authState.studentData})
setData({type:"GROUP", groups: JSON.parse(localStorage.getItem("groups")) || []})
setData({type:"INVIT", invite: JSON.parse(localStorage.getItem("invitations")) || []})

localStorage.setItem("users", JSON.stringify(data.users));
localStorage.setItem("groups", JSON.stringify(data.groups));
localStorage.setItem("invitations", JSON.stringify(data.invitations));

const getAllInterests = [...new Set(data.users.reduce((acc, user) => {
    return acc.concat(user.interests);
}, []))]

setData({type:"SET_INTREST", interests:getAllInterests})
    },[data.users, data.groups, data.invitations])
    return (
        <div>
            <div>
            <SearchBar filterText={data.search} setData={setData} />
            <label>
                    Filters:
                    <select name="Filters" value={data.filter}  onChange={(e) => setData({type:"FILTER", filter: e.target.value})}>
                        <option value="" disabled>Select your Filter</option>
                        {data.filterLists.map((filters) => (
                            <option key={filters} value={filters}>
                                {filters}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <Link to='/groups'><button>Move to Groups</button></Link>
            <div>
                <Card search={data.search} filter={data.filter} studentsList={authState.studentData} />
            </div>
          
        </div>
    );
}

export default Home;

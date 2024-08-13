import React, { useEffect } from 'react';
import SearchBar from '../../componenets/SearchBar/SearchBar';
import { useData } from '../../contexts/DataContext/DataContext';
import Card from '../../componenets/Card/Card';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const {data, setData} = useData();
    const {authState} = useAuth();
  
    useEffect(() => {

const interests = authState.studentData.reduce((acc, user) => {
    
    return acc.concat(user.interests)
},[])
setData({type:"SET_INTREST", interests: interests})

    },[])
    return (
        <div className='home'>
            <div className='home-bar'>
            <SearchBar filterText={data.search} setData={setData} />
            <label>
                    Filters:
                    <select name="Filters" className='input' value={data.filter}  onChange={(e) => setData({type:"FILTER", filter: e.target.value})}>
                        <option value="" disabled>Select your Filter</option>
                        {data.filterLists.map((filters) => (
                            <option key={filters} value={filters}>
                                {filters}
                            </option>
                        ))}
                    </select>
                </label>
                <Link to='/groups' ><button className='btn btn-primary-outline'>Move to Groups</button></Link>
            </div>
            <div>
                <Card search={data.search} filterText={data.filterText} studentsList={authState.studentData} />
            </div>
          
        </div>
    );
}

export default Home;

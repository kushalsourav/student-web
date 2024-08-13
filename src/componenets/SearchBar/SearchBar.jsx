import { useData } from '../../contexts/DataContext/DataContext';
import './SearchBar.css';
const SearchBar = ({filterText}) => {
    const {setData} = useData()
    return (
        <div className='search-bar'>
        <span className="search-icon"><i className="fas fa-search"></i></span>
        <input type="text" 
        name="search"
        className="input"
        value={filterText}
        onChange={(e) => setData({type:"SEARCH",  search:e.target.value})}
        // onBlur={(e) => setData({type:"SEARCH" , search:''})}
        />
        </div>
    );
};

export default SearchBar;
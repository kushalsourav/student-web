import { useData } from '../../contexts/DataContext/DataContext';
import './SearchBar.css';
const SearchBar = ({filterText}) => {
    const {setData} = useData()
    return (
        <>
        <span className="search-icon"><i className="fas fa-search"></i></span>
        <input type="text" 
        name="search"
        className="input searchbar"
        value={filterText}
        onChange={(e) => setData({type:"SEARCH",  search:e.target.value})}
        onBlur={(e) => setData({type:"SEARCH" , search:''})}
        />
        </>
    );
};

export default SearchBar;
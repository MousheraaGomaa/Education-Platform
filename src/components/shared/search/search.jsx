import { useState } from "react";
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useTheme } from '../../../contexts/theme.context'
import { IoIosSearch } from "react-icons/io";
import './search.css'


const Search = () => {
    const navigate = useNavigate();
    const [searchQuery,setSearchQuery] = useState('');
    const { theme } = useTheme();
    const handleInputChange = (e)=>{
        setSearchQuery(e.target.value)
    }
    const handleSearch = ()=>{
        navigate({
            pathname:'search',
            search:createSearchParams({q:searchQuery}).toString()
        });
    }
    return (
        <div className={` search ${theme}`}>
            <IoIosSearch className='search-icon' onClick={handleSearch} />
            <input type="text" placeholder='search by course, instructor...ect' value={searchQuery} onChange={handleInputChange} />
        </div>
    );
}

export default Search;

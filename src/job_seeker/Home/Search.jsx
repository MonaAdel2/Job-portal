import React, { useState, useEffect } from 'react';
import Button from '../../Shared/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Search(){
    const token = localStorage.getItem('token');

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim() !== '') {
            navigate(`/job-seeker/searchResults?query=${encodeURIComponent(query)}`);
        }
        console.log('button is clicked..')
      };
    
    
    return(
        <div className="search-container">
            <input
                type="text"
                className="edit-text"
                placeholder="Search by job title ........"
                required
                value={query}
                onChange={(event)=>{
                    // console.log(event.target.value)
                    console.log({query})
                    setQuery(event.target.value)}
                }
                   
            />
            <button className='button' style={{right: '0'}} onClick={handleSearch}>
                {/* <Link to={"/searchResults/"} className="button">Search</Link> */}
                Search
            </button>
    
        </div>
    );
}
export default Search
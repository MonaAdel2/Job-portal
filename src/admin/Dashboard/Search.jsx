import React, { useState } from 'react';
import Button from '../../Shared/Button';
import { Link } from 'react-router-dom';

function Search(){

    return(
        <div className="search-container">
            <input
                type="text"
                className="edit-text"
                placeholder="Search by job title ........"
            />
            {/* <Button title="Search"/> */}
            <button className='button'>
                <Link to={"/searchResults/"} className="button">Search</Link>
            </button>
    
        </div>
    );
}
export default Search
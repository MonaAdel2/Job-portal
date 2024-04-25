import React, { useState } from 'react';
import Button from '../../Shared/Button';

function Search(){

    return(
        <div className="search-container">
            <input
                type="text"
                className="edit-text"
                placeholder="Search by job title ........"
            />
            <Button title="Search"/>
    
        </div>
    );
}
export default Search
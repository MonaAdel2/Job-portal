import './Select.css'
import React, { useState } from 'react';

function SelectMenu(props){

    const [selectedOption, setSelectedOption] = useState('');

    const optionsList = props.list;
    const listTitle = props.listTitle;

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="select-menu-container">
            <select className="select" value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select a {listTitle}</option>
                {optionsList.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectMenu
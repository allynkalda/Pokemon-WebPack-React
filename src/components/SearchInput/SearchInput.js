import React, { useState } from 'react';

import './SearchInput.css';

export default function SearchInput({ handleClick }) {
    const [ value, setValue ] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick(value);
        }
    };
    return (
        <div className="inputBox">
            <input type="text" className="input" placeholder="Find a Pokemon" onChange={(e) => handleChange(e)} onKeyDown={handleKeyDown}></input>
            <button className="search-button" type="button" aria-label="search" onClick={() => handleClick(value)}>
                <img className="loupe" src="../image/loupe.png" />
            </button>
        </div>
    )
}

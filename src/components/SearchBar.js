import React from 'react';
import '../styles/main.scss';

const SearchBar = (props) => {

    const filterValue = (value) => {
        props.filterValue(value);
    };

    return <div className="search-bar-container">
        <div className="search-section">
            <input className="search" type="text" onChange={ev => filterValue(ev.target.value)}/>
        </div>
    </div>
};

export default SearchBar;
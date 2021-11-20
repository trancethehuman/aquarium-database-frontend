import React from 'react';
import '../css/SearchBar.css';

//Search Bar component. Used on StandardNavBar and anywhere you want
export const SearchBar = () => {
    return(
        <div className="searchContainer">
            <form className="search">
                <input className="searchBar" type="text" placeholder="What are you looking for? 🐠" />
                <input className="searchSubmit" type="submit" value="🔍" />
            </form>
        </div>
    );
};

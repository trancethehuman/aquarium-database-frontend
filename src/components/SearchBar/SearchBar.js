import React from 'react';
import './SearchBar.css';
import MagnifyingGlass from '../../assets/Search_duotone_icon.svg';

//Search Bar component. Used on StandardNavBar and anywhere you want
export const SearchBar = () => {
    return(
        <div className="searchContainer">
            <form className="search">
                <input className="SearchText" type="text" placeholder="What 🐠 are you looking for?" />
                <button className="SearchSubmitButton">
                    <img className='SearchButtonImage' alt='Search Button' src={MagnifyingGlass}></img>
                </button>
            </form>
        </div>
    );
};

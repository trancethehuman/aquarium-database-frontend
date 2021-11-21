import React from 'react';
import './SearchBarCompact.css';
import MagnifyingGlass from '../../assets/Search_duotone_icon.svg';

//Search bar but more compact than standard search bar. To be used on nav bars and small places :D
export const SearchBarCompact = () => {
    return(
        <div className="searchContainer">
            <form className="search">
                <input className="SearchText" type="text" placeholder="What 🐠 are you looking for?" />
                <button className="SearchSubmitButton">
                    <img className='SearchButtonImage' alt='Search Button' src={MagnifyingGlass}></img>
                </button>
            </form>
        </div>
    )
}

import React, { useState } from 'react';
import './SearchBarCompact.css';
import MagnifyingGlass from '../../assets/Search_duotone_icon.svg';

//Search bar but more compact than standard search bar. To be used on nav bars and small places :D
export const SearchBarCompact = ({getSearchTerm}) => {

    return(
        <div className="CompactSearchContainer">
            <input 
                className="CompactSearchText" 
                type="text" 
                placeholder="What 🐠 are you looking for?" 
                onChange={(event) => {
                    getSearchTerm(event.target.value)
                }}
            />
            <button className="CompactSearchSubmitButton">
                <img className='CompactSearchButtonImage' alt='Compact Search Button' src={MagnifyingGlass}></img>
            </button>
        </div>
    )
}

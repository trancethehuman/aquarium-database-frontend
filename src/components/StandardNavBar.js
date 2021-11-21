import React from 'react';
import { LogoCompact } from './Logo/LogoCompact';
import '../css/StandardNavBar.css'
import { SearchBarCompact } from './SearchBar/SearchBarCompact';

//Nav Bar to be used on all pages other than the homepage
export const StandardNavBar = () => {
    return(
        <div className='NavContainer'>
            <div className='LogoStandard'>
                <LogoCompact />
            </div>
            <div className='SearchBarCompact'>
                <SearchBarCompact/>
            </div>
        </div>
    )
}

import React from 'react';
import { LogoCompact } from '../Logo/LogoCompact';
import { SearchBarCompact } from '../SearchBar/SearchBarCompact';
import { MenuButton } from '../Button/MenuButton';
import LoginButton from '../Button/LoginButton';
import './StandardNavBar.css'

//Nav Bar to be used on all pages other than the homepage
export const StandardNavBar = ({getSearchTerm}) => {
    return(
        <div className='NavContainer'>
            <div className='LogoStandard'>
                <LogoCompact />
            </div>
            <div className='SearchBarCompact'>
                <SearchBarCompact getSearchTerm={getSearchTerm}/>
            </div>
            <div className='NavMenuButtons'>
                <MenuButton label='Browse' link='/browse'/>
                <MenuButton label='Compatibility' link='/compatibility'/>
                <MenuButton label='Tank' link='/tank'/>
                <MenuButton label='About' link='/about'/>
                <LoginButton />
            </div>
        </div>
    )
}

import React from 'react';
import LoginButton from '../Button/LoginButton';
import { MenuButton } from '../Button/MenuButton';
import { Logo } from '../Logo/Logo';
import './HomeNavBar.css';

//Standard Nav Bar
export const HomeNavBar = () => {
    return (
        <div className='navBar'>
            <div className='LogoHome'>
                <Logo />
            </div>
            <h3 className="tagLine">A fish & plant search tool</h3>
            <nav className="navButtons">
                <MenuButton link='/browse' label='Browse Database'/>
                <MenuButton link='/compatibility' label='Fish Compatibility'/>
                <MenuButton link='/tank' label='Build Tank'/>
                <MenuButton link='/about' label='About Us'/>
                <LoginButton />
            </nav>
        </div>
    );
}

import React from 'react';
import { Button } from './Button';
import { Logo } from './Logo';
import '../css/HomeNavBar.css';

//Standard Nav Bar
export const HomeNavBar = () => {
    return (
        <div className='navBar'>
            <div className='LogoHome'>
                <Logo />
            </div>
            <h3 className="tagLine">A fish & plant search tool</h3>
            <nav className="navButtons">
                <Button link='/browse' label='Browse Database'/>
                <Button link='/compatibility' label='Fish Compatibility'/>
                <Button link='/tank' label='Build Tank'/>
                <Button link='/about' label='About Us'/>
            </nav>
        </div>
    );
}

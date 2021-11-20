import React from 'react';
import { Button } from './Button';
import { Logo } from './Logo';
import '../css/HomeNavBar.css';

//Standard Nav Bar
export const HomeNavBar = () => {
    return (
        <div className='navBar'>
            <Logo />
            <h3 className="tagLine">A fish & plant search tool</h3>
            <nav className="nav">
                <Button link='/browse' label='Browse Database'/>
                <Button link='/about' label='About Us'/>
                <Button link='/compatibility' label='Fish Compatibility'/>
                <Button link='/tank' label='Build Tank'/>
            </nav>
        </div>
    );
}

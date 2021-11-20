import React from 'react';
import { Button } from './Button';

//Standard Nav Bar
export const HomeNavBar = () => {
    return (
        <nav className="nav">
            <Button link='/browse' label='Browse Database'/>
            <Button link='/about' label='About Us'/>
            <Button link='/compatibility' label='Fish Compatibility'/>
            <Button link='/tank' label='Build Tank'/>
        </nav>
    );
}

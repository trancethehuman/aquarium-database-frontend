import React from 'react';
import { Logo } from './Logo';
import '../css/StandardNavBar.css'

//Nav Bar to be used on all pages other than the homepage
export const StandardNavBar = () => {
    return(
        <div className='NavContainer'>
            <div className='LogoStandard'>
                <Logo />
            </div>
        </div>
    )
}

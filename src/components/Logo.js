import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Logo.css';
import logo from '../assets/Fish_O_Pedia_white.png';

//Fish-O-Pedia Logo
export const Logo = () => {
    return(
        <>
            <Link to="/">
                <img alt='Fish-O-Pedia' src={logo} className='Logo'/>
            </Link>
        </>
    );
};

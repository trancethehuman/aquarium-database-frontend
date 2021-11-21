import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../assets/Fish_O_Pedia_white_small.svg';

//Fish-O-Pedia Logo
export const LogoCompact = () => {
    return(
        <>
            <Link to="/">
                <img alt='Fish-O-Pedia' src={logo} className='LogoCompact'/>
            </Link>
        </>
    );
};

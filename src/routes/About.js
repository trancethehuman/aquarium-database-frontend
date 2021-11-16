import React from 'react';
import { NavBar } from './Nav';

export const About = () => {
    return(
        <div>
            <div className="headContainer">
                <h1 className="header">Fish-O-Pedia 🐟</h1>
                <h3 className="tagLine">About Us!</h3>
                <NavBar />
            </div>
        </div>
    );
}

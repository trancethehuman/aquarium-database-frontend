import React from 'react';
import { HomeNavBar } from '../components/HomeNavBar';

export const About = () => {
    return(
        <div>
            <div className="headContainer">
                <h1 className="header">Fish-O-Pedia 🐟</h1>
                <h3 className="tagLine">About Us!</h3>
                <HomeNavBar />
            </div>
        </div>
    );
}

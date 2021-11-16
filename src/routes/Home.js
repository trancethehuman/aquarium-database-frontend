import React from 'react';
import "../css/Home.css";
import { NavBar } from '../components/Nav';

export const Home = () => {
    return (
        <div>
            <div className="headContainer">
                <h1 className="header">Fish-O-Pedia 🐟</h1>
                <h3 className="tagLine">A fish & plant search tool</h3>
                <NavBar />
            </div>

            <div className="searchContainer">
                <form className="search">
                    <input className="searchBar" type="text" placeholder="What are you looking for? 🐠" />
                    <input className="searchSubmit" type="submit" value="🔍" />
                </form> 
            </div>
        </div>

        
    );
}

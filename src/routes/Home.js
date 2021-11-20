import React from 'react';
import "../css/Home.css";
import { HomeNavBar } from '../components/HomeNavBar';

export const Home = () => {
    return (
        <>
            <HomeNavBar />
            <div className="searchContainer">
                <form className="search">
                    <input className="searchBar" type="text" placeholder="What are you looking for? 🐠" />
                    <input className="searchSubmit" type="submit" value="🔍" />
                </form>
            </div>
        </>
    );
}

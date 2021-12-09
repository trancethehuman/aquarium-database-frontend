import React from 'react';
import "../css/Home.css";
import { HomeNavBar } from '../components/Bars/HomeNavBar';
import { SearchBar } from '../components/SearchBar/SearchBar';

export const Home = () => {
    return (
        <>
            <HomeNavBar />
            <div className='HomeSearchBar'>
                <SearchBar />
            </div>
        </>
    );
}

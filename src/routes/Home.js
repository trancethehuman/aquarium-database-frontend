import React from 'react';
import "../css/Home.css";
import { HomeNavBar } from '../components/NavBar/HomeNavBar';
import { SearchBar } from '../components/SearchBar/SearchBar';

export const Home = () => {
    return (
        <>
            <HomeNavBar />
            <SearchBar />
        </>
    );
}

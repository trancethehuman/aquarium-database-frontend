import React from 'react';
import "../css/Home.css";
import { HomeNavBar } from '../components/HomeNavBar';
import { SearchBar } from '../components/SearchBar';

export const Home = () => {
    return (
        <>
            <HomeNavBar />
            <SearchBar />
        </>
    );
}

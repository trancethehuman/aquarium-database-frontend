import React from 'react';

export const NavBar = () => {
    return (
        <nav className="nav">
            <button className="navButton">
                <a href="/browse">Browse Database</a>
            </button>
            <button className="navButton">
                <a href="/about">About Us</a>
            </button>
            <button className="navButton">
                <a href="/compatibility">Fish Compatibility</a>
            </button>
            <button className="navButton">
                <a href="/tank">Build Tank</a>
            </button>
        </nav>
    );
}
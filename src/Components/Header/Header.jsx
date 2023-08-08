/* eslint-disable no-unused-vars */
import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <nav className='header'>
            <h3>Shiko Blog</h3>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
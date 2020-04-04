import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";
import logo from './Images/logo.png'

const NavBar = () => {
    return (
        <header className={'header'}>
            <Link to={'/'} className={'app-info'}>
                <img className={'logo'} src={logo}  alt="app logo"/>
                <h1 className={'app-name'}>NotesApp</h1>
            </Link>


            <nav className={'nav-bar'}>
                <Link to={'/actual'}>Actual</Link>
                <Link to={'/archive'}>Archive</Link>
                <Link to={'/create'} className={'create-btn'}>Create</Link>

            </nav>

        </header>
    );
};

export default NavBar;
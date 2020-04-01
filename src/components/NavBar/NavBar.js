import React from 'react';


const NavBar = () => {
    return (
        <header className={'header'}>
            <img src="Images/logo.png" className={'logo'} alt="app logo"/>
            <h1 className={'app-name'}>NotesApp</h1>

            <nav>
                <li>Actual</li>
                <li>Archive</li>
            </nav>

            <button>Create</button>

        </header>
    );
};

export default NavBar;
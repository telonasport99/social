import React from 'react';
import s from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={s.nav}>
            <nav >
                <div><a href={'/profile'}>Profile</a></div>
                <div><a href={'/dialogs'}>Messages</a></div>
                <div><a href={'/news'}>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
        </div>
    );
};

export default Navbar;
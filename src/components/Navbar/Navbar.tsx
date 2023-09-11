import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className={s.nav}>
            <nav >
                <div className={s.item}><NavLink activeClassName={s.activeLink} to={'/profile'}>Profile</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.activeLink} to={'/dialogs'}>Messages</NavLink></div>
                <div className={s.item}><NavLink activeClassName={s.activeLink} to={'/news'}>News</NavLink></div>
                <div className={s.item}><a>Music</a></div>
                <div className={s.item}><a>Settings</a></div>
            </nav>
        </div>
    );
};

export default Navbar;
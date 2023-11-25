import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
type HeaderPropsType = {
    login:string | null
    isAuth:boolean
}
const Header = (props:HeaderPropsType) => {
    return (
        <div className={s.header}>
            <header ><img src={'https://yt3.googleuserco' +
                'ntent.com/EPooXnprCPqEtU7DD6G2FGKkId' +
                'm7QTYwgFzmLobYBqbRNnJ1-FnCI1e1jFEWOuW' +
                'AbjOn3CHpsA=s900-c-k-c0x00ffffff-no-rj'}/></header>
            <div className={s.loginBlock}>
                {props.isAuth?<div>{props.login}</div>:<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
};

export default Header;
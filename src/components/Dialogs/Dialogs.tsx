import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

 type DialogsPropsType={

 }
const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog +' '+s.active}><NavLink to={'/dialogs/1'}>Dimych</NavLink></div>
                <div className={s.dialog}><NavLink to={'/dialogs/2'}>Dimych</NavLink></div>
                <div className={s.dialog}><NavLink to={'/dialogs/3'}>Dimych</NavLink></div>
                <div className={s.dialog}><NavLink to={'/dialogs/4'}>Dimych</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are u</div>
                <div className={s.message}>yo-yo</div>
            </div>
        </div>
    );
};

export default Dialogs;
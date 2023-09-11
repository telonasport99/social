import React from 'react';
import s from './Dialogs.module.css'

 type DialogsPropsType={

 }
const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog +' '+s.active}>Vadim</div>
                <div className={s.dialog}>Katya</div>
                <div className={s.dialog}>Liza</div>
                <div className={s.dialog}>Tolya</div>
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
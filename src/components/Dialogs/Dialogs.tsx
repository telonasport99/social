import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

 type DialogsPropsType={
     dialogs:{id:number,name:string}[]
     message:{id:number, message:string}[]
 }

const Dialogs = (props:DialogsPropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(el=><DialogItem name={el.name} id={el.id} key={el.id} />)}
            </div>
            <div className={s.messages}>
                {props.message.map(el=><Message message={el.message} key={el.id}/>)}
            </div>
        </div>
    );
};

export default Dialogs;
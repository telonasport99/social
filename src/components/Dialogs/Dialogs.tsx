import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

 type DialogsPropsType={

 }
 type DialogsItemPropsType={
    name:string
     id:number
 }
 const DialogItem=(props:DialogsItemPropsType)=>{
     let path ='/dialogs' + props.id
     return <div className={s.dialog +' '+s.active}><NavLink to={path}>{props.name}</NavLink></div>
 }
type MessagePropsType={
     message:string
}
 const Message = (props:MessagePropsType)=>{
     return <div className={s.message}>{props.message}</div>
 }
const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={'TOlya'}/>
                <DialogItem id={2} name={'ALLO'}/>
                <DialogItem id={3} name={'kTYA'}/>
                <DialogItem id={5} name={'vadim'}/>
            </div>
            <div className={s.messages}>
               <Message message={'321'}/>
               <Message message={'32'}/>
               <Message message={'1'}/>
               <Message message={'yo'}/>
            </div>
        </div>
    );
};

export default Dialogs;
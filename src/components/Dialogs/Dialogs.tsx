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
     let dialogsData=[
         {id:1,name:'Tolya'},
         {id:2,name:'Vadim'}
     ]
    let messageData=[
        {id:1,message:'321'},
        {id:2,message:'32'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el=><DialogItem name={el.name} id={el.id} key={el.id} />)}
            </div>
            <div className={s.messages}>
                {messageData.map(el=><Message message={el.message} key={el.id}/>)}
            </div>
        </div>
    );
};

export default Dialogs;
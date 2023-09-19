import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

 type DialogsPropsType={

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
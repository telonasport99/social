import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    onSendMessageClick:()=>void
    onNewMessageChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void
        dialogs: { id: number, name: string }[]
        message: { id: number, message: string }[]
        newMessageBody:string
}

const Dialogs = (props: DialogsPropsType) => {
   let onSendMessageClick=()=>{
       props.onSendMessageClick()
   }
   let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
       props.onNewMessageChange(e)
   }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)}
            </div>
            <div className={s.messages}>
                {props.message.map(el => <Message message={el.message} key={el.id}/>)}
            </div>
            <div>
                <div><textarea value={props.newMessageBody} onChange={onNewMessageChange} placeholder={'Enter your message'}/></div>
                <div><button onClick={()=>onSendMessageClick()}>Send</button></div>
            </div>
        </div>
    );
};

export default Dialogs;
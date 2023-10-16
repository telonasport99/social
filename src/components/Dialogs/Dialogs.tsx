import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    messagePage: {
        dialogs: { id: number, name: string }[]
        message: { id: number, message: string }[]
        newMessageBody:string
    }
    dispatch:(action:ActionType)=>void
}

const Dialogs = (props: DialogsPropsType) => {
   let onSendMessageClick=()=>{
       debugger
       props.dispatch(sendMessageAC())
   }
   let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let body = e.currentTarget.value
       props.dispatch(updateNewMessageBodyAC(body))
   }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.messagePage.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagePage.message.map(el => <Message message={el.message} key={el.id}/>)}
            </div>
            <div>
                <div><textarea value={props.messagePage.newMessageBody} onChange={onNewMessageChange} placeholder={'Enter your message'}/></div>
                <div><button onClick={()=>onSendMessageClick()}>Send</button></div>
            </div>
        </div>
    );
};

export default Dialogs;
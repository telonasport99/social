import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store:StoreType
}

const DialogsContainer = (props: DialogsPropsType) => {
   let onSendMessageClick=()=>{
       debugger
       props.store.dispatch(sendMessageAC())
   }
   let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
       props.store.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
   }
   let state=props.store.getState()
    return (
        <Dialogs onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}
                 dialogs={state.messagePage.dialogs} message={state.messagePage.message}
                    newMessageBody={state.messagePage.newMessageBody}
        />
    );
};

export default DialogsContainer;
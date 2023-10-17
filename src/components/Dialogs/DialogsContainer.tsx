import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { StoreContext } from '../../StoreContext';

type DialogsPropsType = {
}

const DialogsContainer = (props: DialogsPropsType) => {
    return (
        <StoreContext.Consumer>
            {store =>{
                let state=store.getState()
                let onSendMessageClick=()=>{
                    debugger
                    store.dispatch(sendMessageAC())
                }
                let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=> {
                    store.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
                }
                return <Dialogs onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}
                               dialogs={state.messagePage.dialogs} message={state.messagePage.message}
                               newMessageBody={state.messagePage.newMessageBody}/>
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
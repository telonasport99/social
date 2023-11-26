import React from 'react';
import {StateType} from "../index";
import { ActionTypeDialogs, SendMessage, UpdateNewMessageBody} from "./store";

type  messagePage = {
    dialogs: { id: number, name: string }[]
    message: { id: number, message: string }[]
    newMessageBody: string
}
let initialState: messagePage = {
    dialogs: [
        {id: 1, name: 'Tolya'},
        {id: 2, name: 'Vadim'}
    ],
    message: [
        {id: 1, message: '321'},
        {id: 2, message: '32'},
    ],
    newMessageBody: ''
}
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'
export const sendMessageAC = (): SendMessage => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyAC = (message: string): UpdateNewMessageBody => {
    return {type: UPDATE_NEW_MESSAGE_BODY, message}
}
export const dialogsReducer = (state = initialState, action: ActionTypeDialogs) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            let stateCopy = {...state, newMessageBody: action.message}
            return stateCopy
        case SEND_MESSAGE:{
            let body = state.newMessageBody
            let stateCopy = {...state, newMessageBody:'',message: [...state.message,{id:5,message:body}]}
            return stateCopy;}
    }
    return state
}
import React from 'react';
import {StateType} from "../index";
import {ActionType, SendMessage, UpdateNewMessageBody} from "./store";
type  messagePage= {
  dialogs: { id: number, name: string }[]
  message: { id: number, message: string }[]
  newMessageBody:string
}
let initialState:messagePage={
  dialogs: [
    {id: 1, name: 'Tolya'},
    {id: 2, name: 'Vadim'}
  ],
  message: [
    {id: 1, message: '321'},
    {id: 2, message: '32'},
  ],
  newMessageBody:''
}
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'
export const sendMessageAC=():SendMessage=>{
  return {
    type:SEND_MESSAGE
  }
}
export const updateNewMessageBodyAC=(message:string):UpdateNewMessageBody=>{
  return {type:UPDATE_NEW_MESSAGE_BODY,message}
}
export const dialogsReducer = (state=initialState,action:ActionType) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.message
      break;
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.message.push({id: 6, message: body})
      break;
  }
  return state
}
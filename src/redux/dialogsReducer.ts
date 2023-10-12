import React from 'react';
import {StateType} from "../index";
import {ActionType, SendMessage, UpdateNewMessageBody} from "./state";
type  messagePage= {
  dialogs: { id: number, name: string }[]
  message: { id: number, message: string }[]
  newMessageBody:string
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
export const dialogsReducer = (state:messagePage,action:ActionType) => {
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
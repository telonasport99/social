import React from "react";
import {StateType} from "../index";

type StoreType = {
    _state: StateType
    changeNewPostText: (newText: string) => void
    callSubscriber: (state: StateType) => void
    addPost: () => void
    subscriber: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export type ActionType = AddPostActionType | UpdateNewPostText|UpdateNewMessageBody|SendMessage
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type SendMessage = {
    type: 'SEND-MESSAGE'
}
export type UpdateNewPostText = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type UpdateNewMessageBody = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    message: string
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are u', likesCount: 3},
                {id: 2, message: 'ImFine', likesCount: 3},
            ],
            newPostText: 'it-kamasutra'
        },
        messagePage: {
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
    },
    getState() {
        return this._state
    },
    callSubscriber(state1: StateType) {
        console.log('321')
    },
    addPost() {

    },
    changeNewPostText(newText: string) {

    },
    subscriber(observer: (state: StateType) => void) {
        this.callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 3
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this.callSubscriber(this._state)
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
             this._state.messagePage.newMessageBody = action.message
            this.callSubscriber(this._state)
        }else if(action.type === SEND_MESSAGE){
            let body = this._state.messagePage.newMessageBody
            this._state.messagePage.newMessageBody=''
            this._state.messagePage.message.push({id:6,message:body})
            this.callSubscriber(this._state)
        }
    }
}
export const addPostAC = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}
export const sendMessageAC=():SendMessage=>{
    return {
        type:SEND_MESSAGE
    }
}

export const updateNewPostTextAC = (newText: string): UpdateNewPostText => {
    return {type: UPDATE_NEW_POST_TEXT, newText}
}
export const updateNewMessageBodyAC=(message:string):UpdateNewMessageBody=>{
    return {type:UPDATE_NEW_MESSAGE_BODY,message}
}


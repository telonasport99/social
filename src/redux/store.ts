import React from "react";
import {StateType} from "../index";
import profile from "../components/Profile/Profile";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

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


 let store = {
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
    addPost() {},
    changeNewPostText(newText: string) {},
    subscriber(observer: (state: StateType) => void) {
        this.callSubscriber = observer
    },
    /*dispatch(action) {
       this._state.profilePage= profileReducer(this._state.profilePage,action)
      this._state.messagePage =  dialogsReducer(this._state.messagePage,action)
        this.callSubscriber(this._state)
    }*/
}



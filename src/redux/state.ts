import React from "react";
import {StateType} from "../index";
type StoreType = {
    _state:StateType
    changeNewPostText:(newText:string)=>void
    callSubscriber:(state:StateType)=>void
    addPost:()=>void
    subscriber:(observer:(state:StateType)=>void)=>void
    getState:()=>StateType
}
export let store:StoreType={
    _state:{
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are u', likesCount: 3},
                {id: 2, message: 'ImFine', likesCount: 3},
            ],
            newPostText:'it-kamasutra'
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Tolya'},
                {id: 2, name: 'Vadim'}
            ],
            message: [
                {id: 1, message: '321'},
                {id: 2, message: '32'},
            ]
        }
    },
    getState(){
      return  this._state
    },
    callSubscriber(state1:StateType) {
        console.log('321')
    },
    addPost(){
        let newPost={
            id:4,
            message:this._state.profilePage.newPostText,
            likesCount:3
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText=''
        this.callSubscriber(this._state)
    },
    changeNewPostText(newText:string){
        this._state.profilePage.newPostText = newText
        this.callSubscriber(this._state)
    },
    subscriber(observer:(state:StateType)=>void){
        this.callSubscriber=observer
    }
}

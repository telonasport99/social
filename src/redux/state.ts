import React from "react";
import {renderTree} from "../render";

export let state = {
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
}
export let addPost=()=>{
    let newPost={
        id:4,
        message:state.profilePage.newPostText,
        likesCount:3
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    renderTree(state)
}
export const changeNewPostText=(newText:string)=>{
    state.profilePage.newPostText = newText
    renderTree(state)
}
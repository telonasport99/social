import React from 'react';
import {StateType} from "../index";
import {ActionType, AddPostActionType, UpdateNewPostText} from "./store";

type postPage= {
    posts: { id: number, message: string, likesCount: number }[]
    newPostText:string
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const addPostAC = (): AddPostActionType => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextAC = (newText: string): UpdateNewPostText => {
    return {type: UPDATE_NEW_POST_TEXT, newText}
}

let initialState:postPage= {
    posts: [
        {id: 1, message: 'Hi how are u', likesCount: 3},
        {id: 2, message: 'ImFine', likesCount: 3},
    ],
        newPostText: 'it-kamasutra'
}
export const profileReducer = (state=initialState,action:ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 3
            }
            let stateCopy = {...state,posts:[...state.posts,newPost]}
            stateCopy.newPostText = ''
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy={...state}
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
    }
    return state
}
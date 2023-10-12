import React from 'react';
import {StateType} from "../index";
import {ActionType, AddPostActionType, UpdateNewPostText} from "./state";

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

export const profileReducer = (state:postPage,action:ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 3
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }
    return state
}
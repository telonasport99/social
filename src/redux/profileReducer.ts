import React from 'react';
import {StateType} from "../index";
import {ActionTypeDialogs, AddPostActionType, UpdateNewPostText} from "./store";

export type postPageType= {
    posts: { id: number, message: string, likesCount: number }[]
    newPostText:string
    profile:null|ProfileType
}
export type ProfileType = {
    aboutMe: string|null;
    contacts: {
        facebook: string|null;
        website: string | null;
        vk: string | null;
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string|null;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string|null;
    fullName: string|null;
    userId: number;
    photos: {
        small: string|null;
        large: string|null;
    };
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
export const setUserProfileAC=(profile:any)=>{
    return{type:'SET-USER-PROFILE',profile}as const
}

let initialState:postPageType= {
    posts: [
        {id: 1, message: 'Hi how are u', likesCount: 3},
        {id: 2, message: 'ImFine', likesCount: 3},
    ],
    newPostText: 'it-kamasutra',
    profile:null
}
export const profileReducer = (state=initialState,action:ActionTypeDialogs) => {
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
        case "SET-USER-PROFILE":{
           return  {...state, profile:action.profile}
        }
    }
    return state
}
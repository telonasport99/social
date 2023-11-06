import React from 'react';
import {StateType} from "../index";
import {ActionType, AddPostActionType, UpdateNewPostText} from "./store";

export type initialStateType= {
    users:Array<UserType>
}
export type UserType={ id: number,img:string,followed:boolean, fullName: string, status:string,location:{
        city:string,
        country:string
    }}
type FollowActionType=ReturnType<typeof followAC>
type UnFollowActionType=ReturnType<typeof unfollowAC>
type SetUserActionType=ReturnType<typeof setUsersAC>
type UsersActionType=FollowActionType|UnFollowActionType|SetUserActionType
export const followAC=(userId:number)=>{
    debugger
    return{type:'FOLLOW',userId}as const
}
export const unfollowAC=(userId:number)=>{
    return{type:'UNFOLLOW',userId}as const
}
let initialState:initialStateType= {
  users:[]
}
export const setUsersAC=(users:Array<UserType>)=>{
   return {type:'SET-USER',users}as const
}

export const userReducer = (state=initialState,action:UsersActionType):initialStateType => {
    switch (action.type) {
        case 'FOLLOW':{
            return {...state, users:state.users.map(el=>el.id===action.userId?{...el,followed:true}:el)}
        }
        case 'UNFOLLOW':{
            return {...state, users:state.users.map(el=>el.id===action.userId?{...el,followed:false}:el)}
        }
        case 'SET-USER':{
            return {...state, users:action.users}
        }
        default:return state
}
}
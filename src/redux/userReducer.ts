import React from 'react';
import {StateType} from "../index";
import {ActionType, AddPostActionType, UpdateNewPostText} from "./store";

export type initialStateType= {
    users:Array<UserType>
    pageSize:number
    totalUserCount:number
    currentPage:number
    isFetching:boolean
    stopFollow:Array<number>
}
export type UserType={ id: number,img:string,followed:boolean, name: string, status:string,photos:{small:string,large:string}}
type FollowActionType=ReturnType<typeof followAC>
type UnFollowActionType=ReturnType<typeof unfollowAC>
type SetUserActionType=ReturnType<typeof setUsersAC>
type SetCurrentPageActionType=ReturnType<typeof setCurrentPageAC>
type SetTotalCountActionType=ReturnType<typeof setTotalCountAC>
type setIsFetchingActionType=ReturnType<typeof setIsFetchingAC>
type StopFollowActionType=ReturnType<typeof stopFollowAC>
type UsersActionType=setIsFetchingActionType|FollowActionType|UnFollowActionType|SetUserActionType|SetCurrentPageActionType|SetTotalCountActionType|StopFollowActionType
export const followAC=(userId:number)=>{
    return{type:'FOLLOW',userId}as const
}
export const unfollowAC=(userId:number)=>{
    return{type:'UNFOLLOW',userId}as const
}
export const setCurrentPageAC=(page:number)=>{
    return{type:'SET-CURRENT-PAGE',page}as const
}
export const setTotalCountAC=(count:number)=>{
    return{type:'SET-TOTAL-COUNT',count}as const
}
export const setIsFetchingAC=(fetching:boolean)=>{
    return{type:'SET-IS-FETCHING',fetching}as const
}
export const stopFollowAC=(isFetching:boolean,id:number)=>{
    return{type:'STOP-FOLLOW',isFetching,id}as const
}
let initialState:initialStateType= {
    users:[],
    pageSize:10,
    totalUserCount:0,
    currentPage:1,
    isFetching:false,
    stopFollow:[] as number[]
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
        case "SET-CURRENT-PAGE":{
            return {...state, currentPage:action.page }
        }
        case 'SET-TOTAL-COUNT':{
            return {...state, totalUserCount:action.count}
        }
        case 'SET-IS-FETCHING':{
            return {...state, isFetching:action.fetching}
        }
        case "STOP-FOLLOW":{
            return {...state,
            stopFollow:action.isFetching
            ? [...state.stopFollow,action.id]
                : state.stopFollow.filter(id=>id!==action.id)
            }
        }

        default:return state
}
}
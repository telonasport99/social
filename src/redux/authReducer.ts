import React from 'react';
import {AppThunkType} from "./redux-store";
import {authApi} from "../api/api";

type InitialStateType={
    id:number|null
    email:string|null
    login:string|null
    isAuth:boolean
}
const initialState:InitialStateType={
        id: null,
        email: null,
        login: null,
        isAuth:false
}
export type ActionTypeUser=SetUserDataACType
export const authReducer=(state=initialState,action:ActionTypeUser)=>{
    switch (action.type) {
        case "SET-USER-DATA":{
            return {...state,email:action.data.email,
                login:action.data.login,
                id:action.data.id,
                isAuth:true
            }
        }
    }
    return state
}
type SetUserDataACType=ReturnType<typeof setUserDataAC>
export const setUserDataAC=(data:InitialStateType)=>{
    return{type:'SET-USER-DATA',data}as const
}
export const authMeTC=():AppThunkType=>{
    return (dispatch)=>{
        authApi.me()
            .then(res => {
                setUserDataAC(res.data.data)
            })
    }
}
import React from 'react';

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
type ActionType=SetUserDataACType
export const authReducer=(state=initialState,action:ActionType)=>{
    switch (action.type) {
        case "SET-USER":{
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
    return{type:'SET-USER',data}as const
}
 import React from 'react'
 import {applyMiddleware, combineReducers, createStore} from "redux";
 import {dialogsReducer} from "./dialogsReducer";
 import {profileReducer} from "./profileReducer";
 import {userReducer, UsersActionType} from "./userReducer";
 import {ActionTypeUser, authReducer} from "./authReducer";
 import thunkMiddleware, {ThunkAction} from "redux-thunk";
 import {ActionTypeDialogs} from "./store";

 let reducers = combineReducers({
 dialogs: dialogsReducer,
 profilePage:profileReducer,
 usersPage:userReducer,
 authPage:authReducer
})
 export type AppActionsType = ActionTypeDialogs | UsersActionType | ActionTypeUser
 export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, AppActionsType>
 export type StoreType=ReturnType<typeof reducers>
export const store = createStore(reducers,applyMiddleware(thunkMiddleware))
 import React from 'react'
 import {combineReducers, createStore} from "redux";
 import {dialogsReducer} from "./dialogsReducer";
 import {profileReducer} from "./profileReducer";
 import {userReducer} from "./userReducer";
 import {authReducer} from "./authReducer";
let reducers = combineReducers({
 dialogs: dialogsReducer,
 profilePage:profileReducer,
 usersPage:userReducer,
 authPage:authReducer
})
 export type StoreType=ReturnType<typeof reducers>
export const store = createStore(reducers)
 import React from 'react'
 import {combineReducers, createStore} from "redux";
 import {dialogsReducer} from "./dialogsReducer";
 import {profileReducer} from "./profileReducer";
 import {userReducer} from "./userReducer";
let reducers = combineReducers({
 dialogs: dialogsReducer,
 profilePage:profileReducer,
 usersPage:userReducer
})
 export type StoreType=ReturnType<typeof reducers>
export let store = createStore(reducers)
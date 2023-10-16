 import React from 'react'
 import {combineReducers, createStore} from "redux";
 import {dialogsReducer} from "./dialogsReducer";
 import {profileReducer} from "./profileReducer";
let reducers = combineReducers({
 dialogs: dialogsReducer,
 profile:profileReducer
})
let store = createStore(reducers)
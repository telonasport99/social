import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store";
type PostType = {
    id: number
    message: string
    likesCount: number
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

type MessagePageType = {
    dialogs: DialogType[]
    message: MessageType[]
    newMessageBody:string
}

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}
const renderTree=(state:StateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}  dispatch={store.dispatch.bind(store)} /></BrowserRouter>,
        document.getElementById('root')
    )
}
renderTree(store.getState())
store.subscriber(renderTree)
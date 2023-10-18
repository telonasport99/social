import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
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
export type StateType = ReturnType<typeof store.getState>


const renderTree=(state:StateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App  />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
renderTree(store.getState())

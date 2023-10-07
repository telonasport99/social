import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {changeNewPostText, state, subscriber} from "./redux/state";
import {addPost} from "./redux/state";
export type StateType = typeof state
const renderTree=(state:StateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}  addPost={addPost} changeNewPostText={changeNewPostText} /></BrowserRouter>,
        document.getElementById('root')
    )
}
renderTree(state)
subscriber(renderTree)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";
import {addPost} from "./redux/state";
type StateType = typeof state
export const renderTree=(state:StateType)=>{
        ReactDOM.render(
            <BrowserRouter>
                <App state={state}  addPost={addPost} /></BrowserRouter>,
            document.getElementById('root')
        )
}
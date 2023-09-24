import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
let postData=[
    {id:1,message:'Hi how are u',likesCount:3},
    {id:2,message:'ImFine',likesCount:3},
]
let dialogsData=[
    {id:1,name:'Tolya'},
    {id:2,name:'Vadim'}
]
let messageData=[
    {id:1,message:'321'},
    {id:2,message:'32'},
]
ReactDOM.render(
    <BrowserRouter>
    <App posts={postData} dialogs={dialogsData} message={messageData}  /></BrowserRouter>,
  document.getElementById('root')
);
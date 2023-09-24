import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
type AppPropsType={
    posts:{id:number,message:string,likesCount:number}[]
    dialogs:{id:number,name:string}[]
    message:{id:number, message:string}[]
}
function App(props:AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route render={()=><Profile posts={props.posts}/>} path={'/profile'}/>
                <Route render={()=><Dialogs dialogs={props.dialogs} message={props.message} />} path={'/dialogs'}/>
                <Route component={News} path={'/news'}/>
            </div>
        </div>
    );
}

export default App;
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UserContainer} from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

type AppPropsType = {}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route render={() => <ProfileContainer/>} path={'/profile'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                <Route component={News} path={'/news'}/>
                <Route render={() => <UserContainer/>} path={'/users'}/>
            </div>
        </div>
    );
}

export default App;
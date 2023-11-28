import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

type AppPropsType = {}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route render={() => <ProfileContainer/>} path={'/profile:userId?'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                <Route component={News} path={'/news'}/>
                <Route render={() => <UserContainer/>} path={'/users'}/>
                <Route render={()=><Login/>} path={'/login'}/>
            </div>
        </div>
    );
}

export default App;
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route component={Profile} path={'/profile'}/>
                <Route component={Dialogs} path={'/dialogs'}/>
                <Route component={News} path={'/news'}/>
            </div>
        </div>
    );
}

export default App;
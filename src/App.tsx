import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import {StateType} from "./index";
import {ActionType} from "./redux/state";

type AppPropsType = {
    state:StateType
    dispatch:(action:ActionType)=>void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route render={() => <Profile dispatch={props.dispatch}
                                              postPage={props.state.profilePage}/>} path={'/profile'}/>
                <Route render={() => <Dialogs messagePage={props.state.messagePage} dispatch={props.dispatch}
                />}
                       path={'/dialogs'}/>
                <Route component={News} path={'/news'}/>
            </div>
        </div>
    );
}

export default App;
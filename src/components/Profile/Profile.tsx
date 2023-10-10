import React from 'react';
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/state";

type ProfilePropsType = {
    postPage: {
        posts: { id: number, message: string, likesCount: number }[]
        newPostText:string
    }
    dispatch:(action:ActionType)=>void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Mypost postPage={props.postPage} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;
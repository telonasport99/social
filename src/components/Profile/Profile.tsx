import React from 'react';
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/store";
import MypostContainer from "./Mypost/MypostContainer";
import {ProfilePropsType} from "./ProfileContainer";


const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} setUserProfile={props.setUserProfile}/>
            <MypostContainer />
        </div>
    );
};

export default Profile;
import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostContainer from "./Mypost/MypostContainer";
import {ProfileType} from "../../redux/profileReducer";
import {Redirect} from "react-router-dom";

export type ProfilePropsType = {
    profile:ProfileType | null
    isAuth:boolean
}
const Profile = (props: ProfilePropsType) => {
    if(!props.isAuth){
        return <Redirect to={'login'}/>}
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} />
            <MypostContainer />
        </div>
    );
};

export default Profile;
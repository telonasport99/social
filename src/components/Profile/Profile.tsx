import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostContainer from "./Mypost/MypostContainer";
import {ProfileType} from "../../redux/profileReducer";

export type ProfilePropsType = {
    profile:ProfileType | null
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} />
            <MypostContainer />
        </div>
    );
};

export default Profile;
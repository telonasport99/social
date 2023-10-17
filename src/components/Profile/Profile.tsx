import React from 'react';
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, StoreType} from "../../redux/store";
import MypostContainer from "./Mypost/MypostContainer";

type ProfilePropsType = {
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MypostContainer />
        </div>
    );
};

export default Profile;
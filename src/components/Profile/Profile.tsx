import React from 'react';
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
type ProfilePropsType={
    posts:{id:number,message:string,likesCount:number}[]
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Mypost posts={props.posts}/>
        </div>
    );
};

export default Profile;
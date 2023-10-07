import React from 'react';
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    postPage: {
        posts: { id: number, message: string, likesCount: number }[]
        newPostText:string
    }
    addPost:()=>void
    changeNewPostText:(newPostText:string)=>void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Mypost postPage={props.postPage} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>
        </div>
    );
};

export default Profile;
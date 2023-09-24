import React from 'react';
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    postPage: {
        posts: { id: number, message: string, likesCount: number }[]
    }
    addPost:(message:string)=>void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Mypost posts={props.postPage.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;
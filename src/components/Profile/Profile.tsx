import React from 'react';
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
const Profile = () => {
    return (
        <div className={s.content}>
            Main content
            <img src={'https://it-incubator.io/_next/static/media/logo.8a063c2a.svg'}/>
            <div>
                ava
            </div>
            <Mypost/>
        </div>
    );
};

export default Profile;
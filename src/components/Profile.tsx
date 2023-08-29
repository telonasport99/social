import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
            Main content
            <img src={'https://it-incubator.io/_next/static/media/logo.8a063c2a.svg'}/>
            <div>
                ava
            </div>
            <div>My posts
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    );
};

export default Profile;
import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div >
            <img className={s.imgBack} src={'https://it-incubator.io/_next/static/media/logo.8a063c2a.svg'}/>
            <div>
                ava
            </div>
        </div>
    );
};

export default ProfileInfo;
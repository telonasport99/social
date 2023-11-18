import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../ProfileContainer";
import Preloader from "../../common/Preoloader/Preloader";

const ProfileInfo = (props:ProfilePropsType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div >
            <img className={s.imgBack} src={'https://it-incubator.io/_next/static/media/logo.8a063c2a.svg'}/>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : ''} alt={'avatar'}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
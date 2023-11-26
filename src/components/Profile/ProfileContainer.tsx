import React from 'react';
import s from './Profile.module.css'

import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";

import { ProfileType, setUserProfileAC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
type PathParamsType={
    userId:string
}
export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType & RouteComponentProps<PathParamsType>
class ProfileContainer extends React.Component<ProfilePropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }
    render(){
       return( <div className={s.content}>
            <Profile profile={this.props.profile} />
        </div>
       )
    };
};
type mapDispatchToPropsType={
    setUserProfile:(profile:any)=>void
}
let mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        setUserProfile:(profile:ProfileType)=>{
            dispatch(setUserProfileAC(profile))
        }
    }
}
type mapStateToPropsType={
    profile:null|ProfileType
}
const mapStateToProps = (state: StoreType):mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    };
};
let WithUrlDataProfile = withRouter(ProfileContainer)
export default connect(mapStateToProps,mapDispatchToProps)(WithUrlDataProfile);
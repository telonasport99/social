import React from 'react';
import s from './Profile.module.css'

import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";

import { ProfileType, setUserProfileAC, setUserProfileTC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {userApi} from "../../api/api";
type PathParamsType={
    userId:string
}
export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType & RouteComponentProps<PathParamsType>
class ProfileContainer extends React.Component<ProfilePropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setUserProfileTC(userId)
    }
    render(){
       return( <div className={s.content}>
            <Profile profile={this.props.profile} />
        </div>
       )
    };
};
type mapDispatchToPropsType={
    setUserProfileTC:(userId:string)=>void
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
export default connect(mapStateToProps,{setUserProfileAC,setUserProfileTC})(WithUrlDataProfile);
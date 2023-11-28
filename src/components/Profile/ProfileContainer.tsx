import React from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";

import { ProfileType, setUserProfileAC, setUserProfileTC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
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
            <Profile profile={this.props.profile} isAuth={this.props.isAuth} />
        </div>
       )
    };
};
type mapDispatchToPropsType={
    setUserProfileTC:(userId:string)=>void
}

type mapStateToPropsType={
    profile:null|ProfileType
    isAuth:boolean
}
const mapStateToProps = (state: StoreType):mapStateToPropsType => {
    return {
        isAuth: state.authPage.isAuth,
        profile: state.profilePage.profile,
    };
};
let WithUrlDataProfile = withRouter(ProfileContainer)
let AuthRedirectComponent=(props:any)=>{
    return <ProfileContainer setUserProfileTC={} profile={} isAuth={} history={} location={} match={}/>
}
export default connect(mapStateToProps,{setUserProfileAC,setUserProfileTC})(WithUrlDataProfile);
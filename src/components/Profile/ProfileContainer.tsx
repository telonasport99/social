import React from 'react';
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/store";
import MypostContainer from "./Mypost/MypostContainer";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC, initialStateType,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/userReducer";
import {postPageType, ProfileType} from "../../redux/profileReducer";

export type ProfilePropsType = mapDispatchToPropsType & mapStateToPropsType
class ProfileContainer extends React.Component<ProfilePropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }
    render(){
       return( <div className={s.content}>
            <Profile profile={this.props.profile} setUserProfile={this.props.setUserProfile} />
        </div>
       )
    };
};
type mapDispatchToPropsType={
    setUserProfile:(profile:any)=>void
}
let mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        setUserProfile:()=>{

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

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer);
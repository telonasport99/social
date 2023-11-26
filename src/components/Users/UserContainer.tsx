import React, {ChangeEvent} from 'react'
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
    import {
    followAC, followTC, getUsersTC,
    initialStateType,
    setCurrentPageAC, setIsFetchingAC,
    setTotalCountAC,
    setUsersAC, stopFollowAC,
    unfollowAC, unfollowTC,
    UserType
} from "../../redux/userReducer";
import {Users} from "./Users";
import Preloader from "../common/Preoloader/Preloader";
import  {userApi} from "../../api/api";
type mapStateToPropsType={
    usersPage:initialStateType
}
let mapStateToProps=(state:StoreType):mapStateToPropsType=>{
    return{
        usersPage:state.usersPage,
    }
}
type mapDispatchToPropsType = {
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC:(id:number)=>void
    unfollowTC:(id:number)=>void
}
export type UserPropsType=mapStateToPropsType&mapDispatchToPropsType



export class UsersContainer extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.usersPage.currentPage,this.props.usersPage.pageSize)
    }
    onPostChanged=(e:number)=>{
        this.props.getUsersTC(e,this.props.usersPage.pageSize)
    }
    render() {
        return (
            <>
               <div> {this.props.usersPage.isFetching?<Preloader/>:<></>}</div>
            <Users getUsersTC={this.props.getUsersTC}
                    usersPage={this.props.usersPage}
                   onPostChanged={this.onPostChanged}
                   followTC={this.props.followTC}
                   unfollowTC={this.props.unfollowTC}
            />
            </>
        );
    }
}
export  default connect(mapStateToProps, {getUsersTC,unfollowTC,followTC})(UsersContainer)
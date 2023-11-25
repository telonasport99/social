import React, {ChangeEvent} from 'react'
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
    import {
    followAC,
    initialStateType,
    setCurrentPageAC, setIsFetchingAC,
    setTotalCountAC,
    setUsersAC, stopFollowAC,
    unfollowAC,
    UserType
} from "../../redux/userReducer";
import axios from "axios";
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
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(page:number)=>void
    setTotalCount:(count:number)=>void
    setIsFetching:(fetching:boolean)=>void
    stopFollow:(fetching:boolean,id:number)=>void
}
export type UserPropsType=mapStateToPropsType&mapDispatchToPropsType

let mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return {
        follow:(userId:number)=>{
            dispatch(followAC(userId))
    },
        unfollow:(userId:number)=>{
            dispatch(unfollowAC(userId))
    },
        setUsers:(users:Array<UserType>)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(page)=>{
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount:(count)=>{
            dispatch(setTotalCountAC(count))
        },
        setIsFetching:(fetching)=>{
            dispatch(setIsFetchingAC(fetching))
        },
        stopFollow:(fetching,id)=>{
            dispatch(stopFollowAC(fetching,id))
        }
    }
}

// @ts-ignore
export class UsersApiComponent extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        userApi.getUsers(this.props.usersPage.currentPage,this.props.usersPage.pageSize)
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.items)
                this.props.setTotalCount(res.totalCount)
                this.props.setIsFetching(false)
            })
    }
    onPostChanged=(e:number)=>{
        this.props.setCurrentPage(e)
        this.props.setIsFetching(true)

        userApi.getUsers(this.props.usersPage.currentPage,this.props.usersPage.pageSize)
            .then(res =>{
                this.props.setIsFetching(false)
                this.props.setUsers(res.items)
            })
    }
    render() {
        return (
            <>
               <div> {this.props.usersPage.isFetching?<Preloader/>:<></>}</div>
            <Users usersPage={this.props.usersPage}
                   setUsers={this.props.setUsers}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   setTotalCount={this.props.setTotalCount}
                   setCurrentPage={this.props.setCurrentPage}
                   onPostChanged={this.onPostChanged}
                   setIsFetching={this.props.setIsFetching}
                   stopFollow={this.props.stopFollow}
            />
            </>
        );
    }
}
export  const UserContainer=connect(mapStateToProps,mapDispatchToProps)(UsersApiComponent)
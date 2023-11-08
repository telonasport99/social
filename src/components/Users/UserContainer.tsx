import React, {ChangeEvent} from 'react'
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/userReducer";
import {UsersC} from "./UsersC";
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
        }
    }
}
export  const UserContainer=connect(mapStateToProps,mapDispatchToProps)(UsersC)
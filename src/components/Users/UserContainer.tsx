import React, {ChangeEvent} from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, initialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/userReducer";
type mapStateToPropsType={
    usersPage:initialStateType
}

let mapStateToProps=(state:StoreType):mapStateToPropsType=>{
    return{
        usersPage:state.usersPage
    }
}
type mapDispatchToPropsType = {
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:Array<UserType>)=>void

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
        }
    }
}
export  const UserContainer=connect(mapStateToProps,mapDispatchToProps)(Users)
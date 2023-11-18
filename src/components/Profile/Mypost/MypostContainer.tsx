import React from 'react';

import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import Mypost from "./Mypost";
import {store, StoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType={
    posts: { id: number, message: string, likesCount: number }[]
    newPostText:string
}
type MapDispatchToPropsType={ addPost:()=>void
    updateNewPostText:(text:string)=>void}
let mapStateToProps=(state:StoreType):MapStateToPropsType=>{
    return{
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts
    }
}
let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
        addPost:()=>dispatch(addPostAC()),
        updateNewPostText:(text:string)=>dispatch(updateNewPostTextAC(text))
    }
}
const MypostContainer = connect(mapStateToProps,mapDispatchToProps)(Mypost)
export default MypostContainer;
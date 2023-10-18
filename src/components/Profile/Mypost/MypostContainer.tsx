import React, {ChangeEvent, LegacyRef} from 'react';
import Post from "./Post/Post";
import {ActionType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import Mypost from "./Mypost";
import {store, StoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogsReducer";
type MyPostPropsType={
}
/*
const MypostContainer = (props:MyPostPropsType) => {
    return
    let state = store.getState()

    const addPost=()=>{
                    store.dispatch(addPostAC())
                }
                const onPostChange=(text:string)=>{
                    store.dispatch(updateNewPostTextAC(text))
                }
             return<Mypost addpost={addPost} newPostText={state.profile.newPostText}
                           updateNewPostText={onPostChange} posts={state.profile.posts} />

};
*/
type MapStateToPropsType={
    posts: { id: number, message: string, likesCount: number }[]
    newPostText:string
}
type MapDispatchToPropsType={ addPost:()=>void
    updateNewPostText:(text:string)=>void}
let mapStateToProps=(state:StoreType):MapStateToPropsType=>{
    return{
        newPostText:state.profile.newPostText,
        posts:state.profile.posts
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
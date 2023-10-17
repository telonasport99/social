import React, {LegacyRef} from 'react';
import Post from "./Post/Post";
import {ActionType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import Mypost from "./Mypost";
type MyPostPropsType={
    store:StoreType
}

const MypostContainer = (props:MyPostPropsType) => {
    const addPost=()=>{
      props.store.dispatch(addPostAC())
        }
    const onPostChange=(text:string)=>{
        props.store.dispatch(updateNewPostTextAC(text))
    }
    let state=props.store.getState()
    return (
        <Mypost addpost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} posts={state.profilePage.posts} />
    );
};

export default MypostContainer;
import React, {LegacyRef} from 'react';
import Post from "./Post/Post";
import {ActionType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import Mypost from "./Mypost";
import {StoreContext} from "../../../StoreContext";
type MyPostPropsType={
}

const MypostContainer = (props:MyPostPropsType) => {

    return (
        <StoreContext.Consumer>
            {store=>{
                let state=store.getState()
                const addPost=()=>{
                    store.dispatch(addPostAC())
                }
                const onPostChange=(text:string)=>{
                    store.dispatch(updateNewPostTextAC(text))
                }
             return<Mypost addpost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} posts={state.profilePage.posts} />
            }}
            </StoreContext.Consumer>
            );
};

export default MypostContainer;
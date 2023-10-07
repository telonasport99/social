import React, {LegacyRef} from 'react';
import Post from "./Post/Post";
import {changeNewPostText} from "../../../redux/state";
type MyPostPropsType={
    postPage: {
        posts: { id: number, message: string, likesCount: number }[]
        newPostText:string
    }
    addPost:()=>void
    changeNewPostText:(newPostText:string)=>void
}
const Mypost = (props:MyPostPropsType) => {
    const addPost=()=>{
      props.addPost()
        }
    const onPostChange=()=>{
        let text = newPostElement.current?.value
        if(text){
        changeNewPostText(text)
    }}
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    return (
        <div>My posts
            <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.postPage.newPostText}></textarea>
            <button onClick={addPost}>addPost</button>
            <button>remove</button>
            </div>
            <div>
                {props.postPage.posts.map(el=><Post message={el.message} likesCount={el.likesCount} key={el.id}/>)}
            </div>
        </div>
    );
};

export default Mypost;
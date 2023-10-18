import React, {LegacyRef} from 'react';
import Post from "./Post/Post";

type MyPostPropsType={
    posts: { id: number, message: string, likesCount: number }[]
    addPost:()=>void
    updateNewPostText:(text:string)=>void
    newPostText:string
}

const Mypost = (props:MyPostPropsType) => {
    const addPost=()=>{
      props.addPost()
        }
    const onPostChange=()=>{
        let text = newPostElement.current?.value
        if(text){
        props.updateNewPostText(text)
    }}
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    return (
        <div>My posts
            <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            <button onClick={addPost}>addPost</button>
            <button>remove</button>
            </div>
            <div>
                {props.posts.map(el=><Post message={el.message} likesCount={el.likesCount} key={el.id}/>)}
            </div>
        </div>
    );
};

export default Mypost;
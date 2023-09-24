import React, {LegacyRef} from 'react';
import Post from "./Post/Post";
type MyPostPropsType={
    posts:{id:number,message:string,likesCount:number}[]
    addPost:(message:string)=>void
}
const Mypost = (props:MyPostPropsType) => {
    const addPost=()=>{
        if(newPostElement.current){
      props.addPost(newPostElement.current.value)
    }}
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    return (
        <div>My posts
            <div>
            <textarea ref={newPostElement}></textarea>
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
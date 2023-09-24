import React from 'react';
import Post from "./Post/Post";
type MyPostPropsType={
    posts:{id:number,message:string,likesCount:number}[]
}
const Mypost = (props:MyPostPropsType) => {

    return (
        <div>My posts
            <div>
            <textarea></textarea>
            <button>addPost</button>
            <button>remove</button>
            </div>
            <div>
                {props.posts.map(el=><Post message={el.message} likesCount={el.likesCount} key={el.id}/>)}
            </div>
        </div>
    );
};

export default Mypost;
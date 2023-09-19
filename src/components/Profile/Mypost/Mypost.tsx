import React from 'react';
import Post from "./Post/Post";

const Mypost = () => {
    let postData=[
        {id:1,message:'Hi how are u',likesCount:3},
        {id:2,message:'ImFine',likesCount:3},
    ]
    return (
        <div>My posts
            <div>
            <textarea></textarea>
            <button>addPost</button>
            <button>remove</button>
            </div>
            <div>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
};

export default Mypost;
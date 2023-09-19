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
                {postData.map(el=><Post message={el.message} likesCount={el.likesCount} key={el.id}/>)}
            </div>
        </div>
    );
};

export default Mypost;
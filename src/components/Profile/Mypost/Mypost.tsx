import React from 'react';
import Post from "./Post/Post";

const Mypost = () => {
    return (
        <div>My posts
            <div>
            <textarea></textarea>
            <button>addPost</button>
            <button>remove</button>
            </div>
            <div>
            <Post message={'Hi how are u'}/>
            <Post message={'Im fine'}/>
            </div>
        </div>
    );
};

export default Mypost;
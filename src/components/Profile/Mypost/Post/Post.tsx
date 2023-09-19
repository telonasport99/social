import React from 'react';
import s from './Post.module.css'
type PostPropsType={
    message:string
    likesCount:number
}
const Post = (props:PostPropsType) => {
    return (
        <div>
            <img className={s.img} src={'https://prikolnye-kartinki.ru/img/picture/Dec/26/da0427eaeb205630073a623f37887ee4/1.jpg'}/>
            <div>{props.message}</div>
            <span>{props.likesCount}</span>
            <span>like</span>
        </div>
    );
};

export default Post;
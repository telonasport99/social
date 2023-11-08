import React from 'react';
import {UserPropsType} from "./UserContainer";
import axios from "axios";


const Users = (props:UserPropsType) => {

 let getUser=()=>{
     if(props.usersPage.users.length===0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res=>{
                props.setUsers(res.data.items)
            })
        }}
    return (
        <div>
            <button onClick={getUser}>getUser</button>
            {props.usersPage.users.map(el => (
                <div key={el.id}>
                  <img src={el.photos.small?el.photos.small:'https://www.shareicon.net/data/512x512/2015/10/17/657343_cat_512x512.png'}/>
                    {el.followed?
                    <button onClick={()=>props.unfollow(el.id)}>unfollow</button>:
                        <button onClick={()=>props.follow(el.id)}>follow</button>
                    }
                    <div> Id:{el.id}</div>
                    <div>Name: {el.name}</div>
                    <div>Status: {el.status?el.status:'NO STATUS'}</div>
                </div>
            ))}
        </div>
    );
};

export default Users;
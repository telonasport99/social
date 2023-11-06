import React from 'react';
import {UserPropsType} from "./UserContainer";


const Users = (props:UserPropsType) => {

    if(props.usersPage.users.length===0){ props.setUsers(  [
        {id: 1,img:'https://www.shareicon.net/data/512x512/2015/10/17/657343_cat_512x512.png',followed:true, fullName: 'Vadim', status:'Work',location:{city:'Volovysk',country:'Belarus'}},
        {id: 2,img:'https://www.shareicon.net/data/512x512/2015/10/17/657343_cat_512x512.png',followed:false, fullName: 'Sasha', status:'Dont work',location:{city:'Hrodno',country:'Belarus'}},
    ])}
    return (
        <div>
            {props.usersPage.users.map(el => (
                <div key={el.id}>
                  <img src={el.img}/>
                    {el.followed?
                    <button onClick={()=>props.unfollow(el.id)}>unfollow</button>:
                        <button onClick={()=>props.follow(el.id)}>follow</button>
                    }
                    <div>Name: {el.fullName}</div>
                    <div>Status: {el.status}</div>
                    <div>Location: {el.location.city}, {el.location.country}</div>

                </div>
            ))}
        </div>
    );
};

export default Users;
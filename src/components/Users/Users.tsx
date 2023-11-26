import React from 'react';
import {UserPropsType} from "./UserContainer";
import style from "./users.module.css";
import {NavLink} from "react-router-dom";


type UsersPropsTypeWithOnChange = UserPropsType & OnPostChangedType
type OnPostChangedType = {
    onPostChanged: (e: number) => void
}
export const Users = (props: UsersPropsTypeWithOnChange) => {

    let pagesCount = Math.ceil(props.usersPage.totalUserCount / props.usersPage.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props)
    return (
        <div>
            <div>
                {pages.map(el => {
                    return <span onClick={() => props.onPostChanged(el)}
                                 className={props.usersPage.currentPage === el ? style.selectedPage : ''}>{el}</span>
                })}
            </div>
            {props.usersPage.users.map(el => (
                <div key={el.id}>
                    <NavLink to={'/profile' + el.id}>
                        <img
                            className={style.userImg}
                            src={el.photos.small ? el.photos.small : 'https://www.shareicon.net/data/512x512/2015/10/17/657343_cat_512x512.png'}/>
                    </NavLink>
                    {el.followed ?
                        <button className={'321'} disabled={props.usersPage.stopFollow.some(id => id === el.id)}
                                onClick={() => {
                                    props.unfollowTC(el.id)
                                }}>unfollow</button> :
                        <button disabled={props.usersPage.stopFollow.some(id => id === el.id)} onClick={() => {
                            props.followTC(el.id)
                        }}>follow</button>
                    }
                    <div> Id:{el.id}</div>
                    <div>Name: {el.name}</div>
                    <div>Status: {el.status ? el.status : 'NO STATUS'}</div>
                </div>
            ))}
        </div>
    );
};

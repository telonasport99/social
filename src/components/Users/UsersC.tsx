import React from 'react'
import {UserPropsType} from "./UserContainer";
import style from './users.module.css'
import axios from "axios";

export class UsersC extends React.Component<UserPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }
    onPostChanged=(e:number)=>{
        this.props.setCurrentPage(e)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.usersPage.pageSize}`)
            .then(res =>{
                this.props.setUsers(res.data.items)
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.usersPage.totalUserCount / this.props.usersPage.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(el => {
                       return <span onClick={()=>this.onPostChanged(el)}
                                     className={this.props.usersPage.currentPage === el ? style.selectedPage : ''}>{el}</span>
                    })}
                </div>
                {this.props.usersPage.users.map(el => (
                    <div key={el.id}>
                        <img
                            src={el.photos.small ? el.photos.small : 'https://www.shareicon.net/data/512x512/2015/10/17/657343_cat_512x512.png'}/>
                        {el.followed ?
                            <button onClick={() => this.props.unfollow(el.id)}>unfollow</button> :
                            <button onClick={() => this.props.follow(el.id)}>follow</button>
                        }
                        <div> Id:{el.id}</div>
                        <div>Name: {el.name}</div>
                        <div>Status: {el.status ? el.status : 'NO STATUS'}</div>
                    </div>
                ))}
            </div>
        );
    }
}
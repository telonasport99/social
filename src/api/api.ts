import axios from "axios";

const instance = axios.create({baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{'API-KEY':'88e747f1-600f-4bbb-8fce-7131a724b96d'}})

export const userApi={
    getUsers(currentPage:number,pageSize:number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res=>res.data)
    },
    follow(id:number){
        return instance.post(`follow/${id}`)
    },
    unfollow(id:number){
       return  instance.delete(`follow/${id}`)
    },
    getProfile(userId:string){
        return    instance.get(`profile/${userId}`)

    }
}
export const authApi={
    me(){
       return  instance.get(`auth/me`)}
}

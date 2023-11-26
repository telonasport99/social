import {StateType} from "../index";
import {setUsersAC} from "./userReducer";
import {setUserProfileAC} from "./profileReducer";

export type ActionTypeDialogs = AddPostActionType | UpdateNewPostText|UpdateNewMessageBody|SendMessage|SetUserActionType
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type SendMessage = {
    type: 'SEND-MESSAGE'
}
export type UpdateNewPostText = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type UpdateNewMessageBody = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    message: string
}
export type SetUserActionType = ReturnType<typeof setUserProfileAC>




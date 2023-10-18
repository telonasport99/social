import React, {ChangeEvent} from 'react';

import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";

/*type DialogsPropsType = {
}

const DialogsContainer = (props: DialogsPropsType) => {
    return (
        <StoreContext.Consumer>
            {store =>{
                let state=store.getState()
                let onSendMessageClick=()=>{
                    debugger
                    store.dispatch(sendMessageAC())
                }
                let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=> {
                    store.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
                }
                return <Dialogs onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}
                               dialogs={state.messagePage.dialogs} message={state.messagePage.message}
                               newMessageBody={state.messagePage.newMessageBody}/>
            }}
        </StoreContext.Consumer>
    );
};*/
type mapDispatchToPropsType = {
    onSendMessageClick:()=>void
    onNewMessageChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void

}
type mapStateToPropsType={
    dialogs: { id: number, name: string }[]
    message: { id: number, message: string }[]
    newMessageBody:string
}

let mapStateToProps=(state:StoreType):mapStateToPropsType=>{
    return{
        dialogs:state.dialogs.dialogs,
        message:state.dialogs.message,
        newMessageBody:state.dialogs.newMessageBody
    }
}
let mapDispatchToProps=(dispatch:Dispatch):mapDispatchToPropsType=>{
    return{
        onSendMessageClick:()=>dispatch(sendMessageAC()),
        onNewMessageChange:(e:ChangeEvent<HTMLTextAreaElement>)=>dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }
}
const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/authReducer";
import {StoreType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then(res => {
                    this.props.setUserDataAC(res.data.data)
            })
    }
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>;
    }
}
type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType
type MapDispatchToPropsType={
    setUserDataAC:(data:any)=>void
}
type MapStateToPropsType=ReturnType<typeof mapStateToProps>
const mapStateToProps = (state:StoreType) => {
    return {
        login:state.authPage.login,
        isAuth: state.authPage.isAuth
    }
}

export default connect(mapStateToProps,{setUserDataAC}) (HeaderContainer);
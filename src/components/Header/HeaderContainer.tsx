import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authMeTC, setUserDataAC} from "../../redux/authReducer";
import {StoreType} from "../../redux/redux-store";
import {authApi} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        this.props.authMeTC()
    }
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>;
    }
}
type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType
type MapDispatchToPropsType={
    authMeTC:()=>void
}
type MapStateToPropsType=ReturnType<typeof mapStateToProps>
const mapStateToProps = (state:StoreType) => {
    return {
        login:state.authPage.login,
        isAuth: state.authPage.isAuth
    }
}

export default connect(mapStateToProps,{authMeTC}) (HeaderContainer);
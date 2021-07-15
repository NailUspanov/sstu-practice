import React from 'react';
import Auth from "../Auth/Auth";
import {connect} from "react-redux";
import {setUserData} from "../../reducers/authReducer";
import {axiosAPI} from "../../api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axiosAPI.getAuth().then((response) => {
            if(response.resultCode === 0){
                this.props.setUserData(response);
            }

        })
    }

    render() {
        return (
            <div className="header">
                <span>Hello!</span>
                <Auth {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthorized,
        login: state.auth.login,
        email: state.auth.email,
        id: state.auth.id
    }

}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);

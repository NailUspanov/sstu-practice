import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {addPost, getStatusThunk, postValueRender, setProfileUser} from "../../reducers/pageProfileReducer";
import {compose} from "redux";
import {axiosAPI} from "../../api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axiosAPI.getUserProfile(this.props.match.params.userId).then((response) => {
            this.props.getStatusThunk(this.props.userId);
            this.props.setProfileUser(response);
        })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        postValue: state.pageProfile.postValue,
        postsData: state.pageProfile.postsData,
        fullName: state.pageProfile.fullName,
        aboutMe: state.pageProfile.aboutMe,
        photo: state.pageProfile.photo,
        defaultPhoto: state.pageProfile.defaultPhoto,

    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, {postValueRender, addPost, setProfileUser, getStatusThunk}),
)(ProfileContainer)
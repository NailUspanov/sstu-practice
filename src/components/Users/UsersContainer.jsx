import React from 'react';
import Users from './Users';
import {connect} from "react-redux";
import {
    followThunk, getUsersThunk, setCurrentPageThunk, unfollowThunk, setCurrentPage
} from "../../reducers/usersReducer";
import {Redirect} from "react-router-dom"
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunk(this.props.currentPage)
        }
    }

    render() {
        let pagesSize = Math.ceil(this.props.totalCountUsers / 1000)

        for (let i = 1; i <= pagesSize; i++) {
            this.props.pagesList.push(i)
        }
        return <Users pagesList={this.props.pagesList} {...this.props}/>
    }
}

let UsersWithRedirect = withAuthRedirect(UsersContainer)

let mapStateToProps = (state) => {
    return {
        users: state.pageUsers.users,
        totalCountUsers: state.pageUsers.totalCountUsers,
        currentPage: state.pageUsers.currentPage,
        followingInProgressStatus: state.pageUsers.followingInProgressStatus,
        pagesList: state.pageUsers.pagesList,
        defaultPhoto: state.pageProfile.defaultPhoto

    }
};


export default connect(mapStateToProps, {
    setCurrentPageThunk,
    unfollowThunk,
    followThunk,
    getUsersThunk,
    setCurrentPage
})(UsersWithRedirect);
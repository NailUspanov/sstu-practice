import {axiosAPI} from "../api";

let initState = {
    users: [],
    currentPage: 1,
    totalCountUsers: 5,
    followingInProgressStatus: [],
    pagesList: [],
}

let usersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FOLLOW': {

            state.users.map(user => {
                if (action.id === user.id) {
                    user.followed = !user.followed;

                }
            })
            return {...state, users: [...state.users]}
        }
            break
        case 'SET-USERS': {
            return {...state, users: [...action.user]}
        }
        case 'SET-TOTAL-COUNT-USERS': {
            return {...state, totalCountUsers: action.num}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.p}
        }
        case 'FOLLOWING-IN-PROGRESS-ON': {
            state.followingInProgressStatus.push(action.id)
            return {
                ...state,
                followingInProgressStatus: [...state.followingInProgressStatus]
            }
        }
        case 'FOLLOWING-IN-PROGRESS-OFF': {
            return {
                ...state,
                followingInProgressStatus: [...state.followingInProgressStatus.filter(id => action.id != id)]
            }
        }
        default:
            return state
    }

}

export let setUsers = (user) => {
    return {type: 'SET-USERS', user: user};
}
export let setTotalCountUsers = (num) => {
    return {type: "SET-TOTAL-COUNT-USERS", num: num};
}
export let follow = (id) => {
    return {type: "FOLLOW", id: id};
}
export let followingInProgressOn = (id) => {
    return {type: "FOLLOWING-IN-PROGRESS-ON", id: id};
}
export let followingInProgressOff = (id) => {
    return {type: "FOLLOWING-IN-PROGRESS-OFF", id: id};
}
export let setCurrentPage = (p) => {
    return {type: "SET-CURRENT-PAGE", p: p};
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(followingInProgressOn(id))
        axiosAPI.follow(id).then((response) => {
            dispatch(followingInProgressOff(id))
            if (response.resultCode === 0) {
                dispatch(follow(id))
            }
        })
    }
}

export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(followingInProgressOn(id))
        axiosAPI.unfollow(id).then((response) => {
            dispatch(followingInProgressOff(id))
            if (response.resultCode === 0) {
                dispatch(follow(id))
            }
        })
    }
}


export const setCurrentPageThunk = (p) => {
    return (dispatch) => {
        dispatch(setCurrentPage(p));
        axiosAPI.getUsers(p).then((response) => {
            dispatch(setTotalCountUsers(response.totalCount))
            dispatch(setUsers(response.items))
        })
    }
}

export const getUsersThunk = (currentPage) => {
    return (dispatch) => {
        axiosAPI.getUsers(currentPage).then((response) => {
            dispatch(setTotalCountUsers(response.totalCount))
            dispatch(setUsers(response.items))
        })
    }
}


export default usersReducer

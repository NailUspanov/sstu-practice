import {axiosAPI} from "../api";

let profileInit = {
    postsData: [
        { text: "jaja binks", id: 1 },
        { text: "funny stuff", id: 2 },
    ],
    postValue: "",
    fullName: 'aboba',
    aboutMe: 'aboba',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
    defaultPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
}

let profileReducer = (state = profileInit, action) => {
    switch (action.type){
        case 'ADD-POST': {
            let copyState = {...state};
            copyState.postsData = [...copyState.postsData];
            let newPost = {text: state.postValue, id: 999}
            copyState.postsData.push(newPost);
            state.postValue = '';
            return copyState;
        }
        case 'POST-VALUE-RENDER': {
            let copyState = {...state};
            copyState.postValue = action.text;
            return copyState;
        }
        case 'SET-PROFILE-USER': {
            return {
                ...state,
                fullName: action.user.fullName,
                photo: action.user.photos.small,
                ...action}

        }
        case 'SET-STATUS':{
            return {
                ...state,
                aboutMe: action.status
            }
        }
        default: return state;
    }


}
export let setUsers = () => ({type: "ADD-POST"});
export let postValueRender = (text) => {
    return ({type: "POST-VALUE-RENDER", text: text});
}
export let addPost = (text) => {
    return {type: "ADD-POST", text: text};
}
export let setProfileUser = (user) => {
    return ({type: "SET-PROFILE-USER", user: user});
}
export let setStatus = (status) => {
    return ({type: "SET-STATUS", status:status})
}
export let setImage = (img) => {
    return ({type: "SET-IMAGE", img:img})
}

export const getStatusThunk = (id) => {
    return dispatch =>{
        axiosAPI.getStatus(id).then(response => {
            dispatch(setStatus(response))
        })
    }
}

export default profileReducer;
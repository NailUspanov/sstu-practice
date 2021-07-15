
let initState = {
    isAuthorized: false,
    login: null,
    id: null,
    email: null
}

let authReducer = (state = initState, action) => {
    switch (action.type){
        case 'SET-USER-DATA':{
            debugger
            let {id, login, email} = action.data.data;
            return {...state, isAuthorized: true, login, id, email}
        }

        default: return state
    }

}

export let setUserData = (data) => {
    return {type: "SET-USER-DATA", data};
}


export default authReducer

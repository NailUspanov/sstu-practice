
let profileInit = {
    postsData: [
        { text: "jaja binks", id: 1 },
        { text: "funny stuff", id: 2 },
    ],
    postValue: "",
}

let profileReducer = (state = profileInit, action) => {
    switch (action.type){
        case 'ADD-POST':
            let newPost = {text: state.postValue, id: 999}
            state.postsData.push(newPost);
            state.postValue = '';
            return state;
        case 'POST-VALUE-RENDER':
            state.postValue = action.text;
            return state;
        default: return state;
    }


}

export default profileReducer;
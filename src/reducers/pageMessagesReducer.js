
let messagesInit = {
        dialogItemsData: [
            { name: 'Nail', id: 1 },
            { name: 'Sophya', id: 2 },
            { name: 'Max', id: 3 },
            { name: 'Anton', id: 4 }
        ],
        messagesData: [
            {text: 'Hello!', id: 999},
        ],
        messageValue: 'q',
    };

export let messageValueRender = (text) => {
    return {type: 'MESSAGE-VALUE-RENDER', text: text};
}
export let addMessage = () => {
    return {type: 'ADD-MESSAGE'};
}

let messagesReducer = (state = messagesInit, action) => {
    switch (action.type){
        case 'MESSAGE-VALUE-RENDER': {
            let stateCopy = {...state};
            stateCopy.messageValue = action.text;
            return stateCopy;
        }
        case 'ADD-MESSAGE': {
            let stateCopy = {...state};
            stateCopy.messagesData = [...stateCopy.messagesData];
            let newMessage = {text: state.messageValue, id: 0}
            stateCopy.messagesData.push(newMessage);
            return stateCopy;
        }

        default: return state;
    }
}

export default messagesReducer;
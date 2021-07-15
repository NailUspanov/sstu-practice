import React from 'react';
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {addMessage, messageValueRender} from "../../reducers/pageMessagesReducer";


class MessagesContainer extends React.Component{
    render() {
        return <Messages {...this.props}/>
    }
}

let WithRedirect = withAuthRedirect(MessagesContainer)


const mapStateToProps = (state) => {
    return {
        messageValue: state.pageMessages.messageValue,
        dialogItemsData: state.pageMessages.dialogItemsData,
        messagesData: state.pageMessages.messagesData
    }
}

export default  connect(mapStateToProps, {messageValueRender, addMessage})(WithRedirect);


import React from 'react';
import s from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessages from "./DialogMessages/DialogMessages";


const Messages = (props) => {
    let dialogItems = props.dialogItemsData.map(el => <DialogItem name={el.name}/>)
    let messagesData = props.messagesData.map(el => <DialogMessages text={el.text}/>)
    let addMessageLink = React.createRef();

    const messageValueRender = () => {
        let text = addMessageLink.current.value;
        props.messageValueRender(text);
    }


    return (

        <div className={s.main}>
            <div className={s.leftBar}>
                <ul>
                    {dialogItems}
                </ul>
            </div>
            <div className={s.rightBar}>
                <div className="messagesArea">
                    {messagesData}
                </div>

                <textarea value={props.messageValue}
                          onChange={messageValueRender}
                          ref={addMessageLink}/>
                <button onClick={props.addMessage}/>
            </div>
            <DialogMessages
            />

        </div>
    );
}

export default Messages;

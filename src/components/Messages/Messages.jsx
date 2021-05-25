import React from 'react';
import s from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessages from "./DialogMessages/DialogMessages";

const Messages = (props) => {
    debugger;
    let dialogItems = props.pageMessages.dialogItemsData.map(el => <DialogItem name={el.name}/> )
    let messagesData = props.pageMessages.messagesData.map(el => <DialogMessages text={el.text}/>)
    let addMessageLink = React.createRef();
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

              <textarea value={props.pageMessages.messageValue}
                        onChange={()=> props.dispatch({type: 'MESSAGE-VALUE-RENDER', text: addMessageLink.current.value})}
                        ref={addMessageLink}/>
              <button onClick={() => props.dispatch({type: 'ADD-MESSAGE'})}/>
          </div>
          <DialogMessages
          />

      </div>
   );
}

export default Messages;

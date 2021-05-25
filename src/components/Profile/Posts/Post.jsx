import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
   let like = 0;
   return (

      <div className={s.post}>
         <img src="https://www.meme-arsenal.com/memes/443daa8b027c481fc2cdd9cba95bc56d.jpg" alt="" />
         {props.content}
         <button onClick={like++}>Like: {like}</button>
      </div>

   );
}

export default Post;

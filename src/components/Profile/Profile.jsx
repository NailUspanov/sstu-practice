import React from 'react';
import Post from './Posts/Post';
import s from './Profile.module.css'

const Profile = (props) => {

   let postsData = props.postsData.map(el => <Post content={el.text} />);

   let addPostLink = React.createRef();

   let postValueRender = () => {
      props.dispatch({type: "POST-VALUE-RENDER", text: addPostLink.current.value});
   }

   return (
      <div className={s.main}>
         <div className={s.description}>
            <img src='https://pbs.twimg.com/profile_images/915573057519054848/h6Wkoov3_400x400.jpg'/>
            <span className={s.userName}>Nail Uspanov</span>
         </div>
         <div>
            <textarea onChange={postValueRender} value={props.postValue} ref={addPostLink}/>
            <button onClick={() => props.dispatch({type: "ADD-POST"})}>Add post</button>
            {postsData}
         </div>
      </div>
   );

}

export default Profile;

import React from 'react';
import Post from './Posts/Post';
import s from './Profile.module.css'
import Status from "./Status";



const Profile = (props) => {

    let postsData = props.postsData.map(el => <Post content={el.text}/>);

    let addPostLink = React.createRef();

    let postValueRender = () => {
        props.postValueRender(addPostLink.current.value);
    }

    return (
        <div className={s.main}>
            <div className={s.description}>
                <img src={props.photo || props.defaultPhoto}/>
                <span className={s.userName}>{props.fullName}
                    <Status status={props.aboutMe}
                            getStatusThunk={props.getStatusThunk}
                            userId={props.match.params.userId}/></span>
            </div>

            <div>
                <textarea onChange={postValueRender} value={props.postValue} ref={addPostLink}/>
                <button onClick={props.addPost}>Add post</button>
                {postsData}
            </div>
        </div>
    );

}

export default Profile;

import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

let Users = (props) => {
debugger
    return (
        <div className={s.main}>
            {props.pagesList.map(p => {
                return <span onClick={() => {
                    props.setCurrentPageThunk(p)
                }
                }>{p}</span>
            })}
            {props.users.map(user =>
                <div className={s.user}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small || props.defaultPhoto} alt=""/>
                    </NavLink>
                    <span>{user.name} </span>
                    <button disabled={props.followingInProgressStatus.some(id => {return id === user.id})} onClick={() => {
                        if (!user.followed) {
                            props.followThunk(user.id)
                        } else {
                            props.unfollowThunk(user.id)
                        }

                    }}>{user.followed ? 'UNFOLLOW' : 'FOLLOW'}
                    </button>
                </div>
            )}
        </div>
    )

}

export default Users


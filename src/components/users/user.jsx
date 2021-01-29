import React from 'react';
import {NavLink} from "react-router-dom";
import photo from '../../assets/images/user.png';
import style from './users.module.css';

let User = (props) => {

    return (
        <div>
            {props.users.map(u => <div key={u.id} className={style.user}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={style.userPhoto} src={u.photos.small ? u.photos.small : photo} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        <p>{u.name}</p>
                        <p>{u.status}</p>
                        {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }} className={style.btnSend}>
                            unfollow</button> : <button onClick={() => {
                            props.follow(u.id)
                        }}
                                                        className={style.btnSend}>
                            follow</button>}
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default User;
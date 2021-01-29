import React from 'react';
import { Field, reduxForm } from 'redux-form';
import wrap from '../../assets/images/wrapper.jpg';
import { Input } from '../../common/formControl/formControl';
import { maxLength, required } from "../../utils/validators/validators";
import Post from './post/post';
import style from './profile.module.css';
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {

    let postElement = props.posts.map(p => <Post profile={props.profile} key={p.id} message={p.message} likesCount={p.likesCount}/>);
    let sendNewPost = (e) => {
        props.addPost(e.post);
    }

    return (
        <div className={style.profile}>
            <div>
                <img className={style.wrapperImg} src={wrap} alt=""/>
            </div>
            <ProfileInfo profile={props.profile}
            changeStatus = {props.changeStatus}
            status={props.status} />
            <h2>My posts</h2>
            <PostForm onSubmit={sendNewPost} />
            <div className={style.container}>
                {postElement}
            </div>
        </div>
    )
}

const maxLength30 = maxLength(30);
const PostFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength30] } className={style.inputMessage}
             placeholder='entry your post'
              type="text" name='post' component={Input } />
            <div>
                <button className={style.btnSend}>send</button>
            </div>
        </form>
    )
}

const PostForm = reduxForm({form: 'post'})(PostFormRedux);

export default Profile;
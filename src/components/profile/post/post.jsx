import userPhoto from '../../../assets/images/user.png';
import Preloader from "../../../common/preloader/preloader";
import style from './post.module.css';

const Post = (props) => {
    {if (!props.profile) {
        return <Preloader />
    }}
    return (
        <div className={style.itemMessage}>
            <img className={style.userPhoto} src={props.profile.photos.small==null?userPhoto:props.profile.photos.small} alt="" />
            <span > <p className={style.message}>{props.message}</p></span>
            <div>Likes {props.likesCount}</div>
        </div>
    )
}
export default Post;
import defaultPhoto from '../../../assets/images/user.png';
import Preloader from "../../../common/preloader/preloader";
import style from './profileInfo.module.css';
import ProfileStatus from './profileStatus/profileStatus';



let ProfileInfo = (props) => {
    {if (!props.profile) {
        return <Preloader />
    }}


    return (
        <div>
            <ProfileStatus status={props.status}
            changeStatus = {props.changeStatus}
            />
        <div className={style.user}>
            <div className={style.photo}>
                <img src={!props.profile.photos.large? defaultPhoto: props.profile.photos.large} alt=""/>
            </div>
            <div>
                <p className={style.name}>{props.profile.fullName}</p>
                <p>SEARCHING WORK: {props.profile.lookingForAJob? <span className={style.green}>search</span>:
                    <span className={style.green}>don`t search</span>}</p>
            </div>
        </div>
        </div>
    )
}
export default ProfileInfo;
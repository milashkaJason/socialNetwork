import preloader from '.././../assets/images/preloader.svg';
import style from './preloader.module.css'


let Preloader = () =>  {
    return (
        <div>
            <img className={style.preloader} src={preloader} alt=""/>
        </div>
    )
}


export default Preloader;
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import style from './header.module.css';


const Header = (props) => {
    return (
        <div className={style.header}>
            <img src={logo} alt=""/>
            <h1>social network</h1>
            {props.inAuth ? <span>{props.login}<button onClick={props.logout}>logout</button></span> :
                <NavLink className={style.login} to={'/login'}>
                    <p>log IN</p>
                </NavLink>}
        </div>
    )
}


export default Header;
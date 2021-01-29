import style from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={style.nav}>
            <div className={style.link}>
                <NavLink activeClassName={style.activeLink} to='/profile'>Profile</NavLink>
            </div>
            <div className={style.link}>
                <NavLink activeClassName={style.activeLink} to='/dialogs'>Dialogs</NavLink>
            </div>
            <div className={style.link}>
                <NavLink activeClassName={style.activeLink} to='/users'>Users</NavLink>
            </div>
            <div className={style.link}>
                <NavLink activeClassName={style.activeLink} to='/music'>Music</NavLink>
            </div>
            <div className={style.link}>
                <NavLink activeClassName={style.activeLink} to='/setting'>Setting</NavLink>
            </div>
        </div>
    )
}

export default Navbar;
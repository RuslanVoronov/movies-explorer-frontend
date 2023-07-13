import './NavLog.css'
import { Link, NavLink } from 'react-router-dom';

function NavLog() {

    return (
        <>
            <nav className="nav-log">
                <ul className="nav-log__list">
                    <li className="nav-log__item">
                        <NavLink to="/movies" className="nav-log__link"
                            activeClassName="nav-log__link_active">Фильмы</NavLink>
                    </li>
                    <li className="nav-log__item">
                        <NavLink to="/saved-movies" className="nav-log__link"
                            activeClassName="nav-log__link_active">Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <Link to="/profile" className="nav-log__link nav-log__link_type_profile">Аккаунт</Link>

            </nav>
            <button type='button' className='nav-log__menu'></button>

        </>
    );
};

export default NavLog;
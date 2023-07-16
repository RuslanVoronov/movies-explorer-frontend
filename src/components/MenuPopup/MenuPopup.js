import './MenuPopup.css'
import { Link, NavLink } from 'react-router-dom';

function MenuPopup({ isPopupOpen, onClose }) {

    return (
        <nav className={`${isPopupOpen ? 'menu-popup menu-popup_opened' : 'menu-popup'}`}>
            <div className='menu-popup__content'>
                <button className='menu-popup__close-button' onClick={onClose}></button>
                <ul className="menu-popup__list">
                    <li className="menu-popup__item">
                        <NavLink to="/" className="menu-popup__link"
                            activeClassName="menu-popup__link">Главная</NavLink>
                    </li>
                    <li className="menu-popup__item">
                        <NavLink to="/movies" className="menu-popup__link"
                            activeClassName="menu-popup__link">Фильмы</NavLink>
                    </li>
                    <li className="menu-popup__item">
                        <NavLink to="/saved-movies" className="menu-popup__link"
                            activeClassName="menu-popup__link">Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <Link to="/profile" className="menu-popup__link menu-popup__link_type_profile">Аккаунт</Link>
            </div>
        </nav>
    );
};

export default MenuPopup;
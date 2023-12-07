import './MenuPopup.css'
import { NavLink } from 'react-router-dom';

function MenuPopup({ isPopupOpen, onClose }) {

    return (
        <nav className={`${isPopupOpen ? 'menu-popup menu-popup_opened' : 'menu-popup'}`}>
            <div className='menu-popup__content'>
                <button className='menu-popup__close-button' onClick={onClose}></button>
                <ul className="menu-popup__list">
                    <li className="menu-popup__item">
                        <NavLink to="/" onClick={onClose} className="menu-popup__link"
                            activeClassName="menu-popup__link_active">Главная</NavLink>
                    </li>
                    <li className="menu-popup__item">
                        <NavLink to="/movies" onClick={onClose} className="menu-popup__link"
                            activeClassName="menu-popup__link">Фильмы</NavLink>
                    </li>
                    <li className="menu-popup__item">
                        <NavLink to="/saved-movies" onClick={onClose} className="menu-popup__link"
                            activeClassName="menu-popup__link">Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <NavLink to="/profile" onClick={onClose} className="menu-popup__link menu-popup__link_type_profile">Аккаунт</NavLink>
            </div>
        </nav>
    );
};

export default MenuPopup;
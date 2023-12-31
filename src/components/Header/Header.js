import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavAuth from '../NavAuth/NavAuth';
import NavLog from '../NavLog/NavLog';

function Header({ onMenuClick, loggedIn }) {
    const { pathname } = useLocation();

    return (
        <header className="header">
            <Link to='/'>
                <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            {pathname === '/' && !loggedIn ? <NavAuth /> : <NavLog onMenuClick={onMenuClick} />}
        </header>
    );
}
export default Header;
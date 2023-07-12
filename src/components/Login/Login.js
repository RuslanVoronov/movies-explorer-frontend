import '../Form/Form.css';
import { Link } from "react-router-dom";
import logo from '../../images/Logo.svg';

function Login() {
    return (
        <>
            <section className="form">
                <Link className='form__logo' to='/'>
                    {/* <img src={logo} alt="Логотип" className='' /> */}
                </Link>
                <h2 className="form__title">Рады видеть!</h2>
                <form className="form__form" >
                    <div>
                        <div className='form__area'>
                            <p className="form__text">E-mail</p>
                            <input className="form__input form__input_type_email" name='email' minLength="2"
                                maxLength="40" required />
                            <span className="form__error" id="email-error"></span>
                        </div>
                        <div className='form__area'>
                            <p className="form__text">Пароль</p>
                            <input className="form__input form__input_type_password" name='password' minLength="2"
                                type="password" maxLength="200" required />
                            <span className="form__error" id="password-error"></span>
                        </div>
                    </div>
                    <button className="form__submit" type="submit">Войти</button>
                </form>
                <p className="form__extra-text">Ещё не зарегистрированы? <Link className="form__link" to="/signup">Регистрация</Link></p>
            </section>
        </>
    );
}

export default Login
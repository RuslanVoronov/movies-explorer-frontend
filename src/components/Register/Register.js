import '../Form/Form.css';
import { Link } from "react-router-dom";

function Register() {
    return (
        <section className="form">
            <Link className='form__logo' to='/'>
                {/* <img src={logo} alt="Логотип" className='' /> */}
            </Link>
            <h2 className="form__title">Добро пожаловать!</h2>
            <form className="form__form" >
                <div>
                    <div className='form__area'>
                        <p className="form__text">Имя</p>
                        <input className="form__input form__input_type_name" name='name' minLength="2"
                            maxLength="40" required />
                        <span className="form__error" id="name-error"></span>
                    </div>
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
                <button className="form__submit" type="submit">Зарегистрироваться</button>
            </form>
            <p className="form__extra-text">Уже зарегистрированы? <Link className="form__link" to="/signin">Войти</Link></p>
        </section>
    );
}

export default Register
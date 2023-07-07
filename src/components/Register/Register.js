import '../Form/Form.css';
import Header from '../Header/Header';
import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <Header />
            <section className="form">
                <h2 className="form__title">Добро пожаловать!</h2>
                <form className="form__form" >
                    <input className="form__input form__input_type_name" name='name' minLength="2"
                        maxLength="40" placeholder="Имя" required />

                    <input className="form__input form__input_type_email" name='email' minLength="2"
                        maxLength="40" placeholder="Email" required />

                    <input className="form__input form__input_type_password" name='password' minLength="2"
                        type="password" maxLength="200" placeholder="Пароль" required />
                    <button className="form__submit" type="submit">Зарегистрироваться</button>
                </form>
                <p className="form__extra-text">Уже зарегистрированы? <Link className="form__link" to="/signin">Войти</Link></p>
            </section>
        </>
    );
}

export default Register
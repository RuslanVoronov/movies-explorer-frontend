import '../Form/Form.css';
import Header from '../Header/Header';
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <Header />
            <section className="form">
                <h2 className="form__title">Рады видеть!</h2>
                <form className="form__form" >
                    <input className="form__input form__input_type_email" name='email' minLength="2"
                        maxLength="40" placeholder="Email" required />

                    <input className="form__input form__input_type_password" name='password' minLength="2"
                        type="password" maxLength="200" placeholder="Пароль" required />
                    <button className="form__submit" type="submit">Войти</button>
                </form>
                <p className="form__extra-text">Ещё не зарегистрированы? <Link className="form__link" to="/signup">Регистрация</Link></p>
            </section>
        </>
    );
}

export default Login
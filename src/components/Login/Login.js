import '../Form/Form.css';
import { Link } from "react-router-dom";
import logo from '../../images/Logo.svg';
import { useForm } from "../../hooks/useForm";

function Login({ onLogin }) {

    const { values, handleChange, setValues, isValid, errors } = useForm({})
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onLogin(values)
    };

    return (
        <section className="form">
            <div className='form__container'>
                <Link className='form__logo' to='/'>
                    <img src={logo} alt="Логотип" />
                </Link>
                <h2 className="form__title">Рады видеть!</h2>
                <form className="form__form" onSubmit={handleSubmit} >
                    <div>
                        <div className='form__area'>
                            <p className="form__text">E-mail</p>
                            <input className={`${errors.email ? 'form__input form__input_error' : 'form__input'}`}
                                value={values.email || ''} onChange={handleChange}
                                name='email' minLength="2" type='email'
                                maxLength="40" required />
                            <span className="form__error-message" id="email-error">{errors.email}</span>
                        </div>
                        <div className='form__area'>
                            <p className="form__text">Пароль</p>
                            <input className={`${errors.password ? 'form__input form__input_error' : 'form__input'}`}
                                value={values.password || ''} onChange={handleChange}
                                name='password' minLength="6"
                                type="password" maxLength="30" required />
                            <span className="form__error-message" id="password-error">{errors.password}</span>
                        </div>
                    </div>
                    <button className={`${isValid ? "form__submit" : "form__submit form__submit_invalid"}`} type="submit" disabled={!isValid ? true : ''}>
                        {"Войти"}
                    </button>
                </form>
                <p className="form__extra-text">Ещё не зарегистрированы? <Link className="form__link" to="/signup">Регистрация</Link></p>
            </div>
        </section>
    );
}

export default Login
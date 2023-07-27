import '../Form/Form.css';
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import logo from '../../images/Logo.svg';

function Register({ onRegister, isLoading }) {

    const { values, handleChange, setValues, isValid, errors } = useForm({})

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(values)
    }

    return (
        <section className="form">
            <div className='form__container'>
                <Link className='form__logo' to='/'>
                    <img src={logo} alt="Логотип" className='' />
                </Link>
                <h2 className="form__title">Добро пожаловать!</h2>
                <form className="form__form" onSubmit={handleSubmit} >
                    <div>
                        <div className='form__area'>
                            <p className="form__text">Имя</p>
                            <input className={`${errors.name ? 'form__input form__input_error' : 'form__input'}`}
                                value={values.name || ''} onChange={handleChange}
                                disabled={isLoading ? true : ''}
                                name='name' minLength="2"
                                maxLength="40" required />
                            <span className="form__error-message" id="name-error">{errors.name}</span>
                        </div>
                        <div className='form__area'>
                            <p className="form__text">E-mail</p>
                            <input className={`${errors.email ? 'form__input form__input_error' : 'form__input'}`}
                                value={values.email || ''} onChange={handleChange}
                                disabled={isLoading ? true : ''}
                                name='email' minLength="2" type='email'
                                maxLength="40" required />
                            <span className="form__error-message" id="email-error">{errors.email}</span>
                        </div>
                        <div className='form__area'>
                            <p className="form__text">Пароль</p>
                            <input className={`${errors.password ? 'form__input form__input_error' : 'form__input'}`}
                                value={values.password || ''} onChange={handleChange}
                                disabled={isLoading ? true : ''}
                                name='password' minLength="2"
                                type="password" maxLength="200" required />
                            <span className="form__error-message" id="password-error">{errors.password}</span>
                        </div>
                    </div>
                    <button className={`${isValid ? "form__submit" : "form__submit form__submit_invalid"}`} type="submit" disabled={!isValid ? true : ''}>
                        {isLoading ? "Загрузка..." : "Зарегистрироваться"}
                    </button>
                </form>
                <p className="form__extra-text">Уже зарегистрированы? <Link className="form__link" to="/signin">Войти</Link></p>
            </div>
        </section>
    );
}

export default Register
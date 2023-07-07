import './Profile.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <>
            <Header>
            </Header>
            <section className="profile">
                <h2 className="profile__title">Привет, Руслан!</h2>
                <form className="profile__profile" >
                    <input className="profile__input profile__input_type_password" name='name' minLength="2"
                        type="password" maxLength="200" placeholder="Имя" required />
                    <input className="profile__input profile__input_type_email" name='email' minLength="2"
                        maxLength="40" placeholder="Email" required />
                    <button className="profile__submit" type="submit">Войти</button>
                </form>
                <Link className="profile__link">Редактировать</Link>
                <Link className="profile__link" to="/signup">Выйти из аккаунта</Link>
            </section>
        </>
    );
}

export default Profile;

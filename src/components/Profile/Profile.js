import './Profile.css'
import { useContext, useState } from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from '../../hooks/useForm';

function Profile({ onMenuClick, signOut, onEditProfile }) {
    const currentUser = useContext(CurrentUserContext);
    const { values, handleChange, setIsValid, isValid } = useForm(currentUser)

    const [name, setName] = useState(currentUser.name);
    const [lastName, setLastName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [lastEmail, setLastEmail] = useState(currentUser.email);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onEditProfile(values)
        setName(values.name)
    };
    return (
        <>
            <Header onMenuClick={onMenuClick}>
            </Header>
            <section className="profile">
                <h2 className="profile__title">Привет, {name}!</h2>
                <form className="form profile__form" onSubmit={handleSubmit}>
                    <div className='profile__area profile__area_type_name'>
                        <p className='profile__text'>Имя</p>
                        <input className="profile__input profile__input_type_name" value={values.name} name='name'
                            onChange={handleChange}
                            minLength="2"
                            type="name" maxLength="200" required />
                    </div>
                    <div className='profile__area'>
                        <p className='profile__text'>E-mail</p>
                        <input className="profile__input profile__input_type_email" value={values.email} name="email"
                            onChange={handleChange}
                            type="email" minLength="2"
                            maxLength="40" required />
                    </div>
                    <div className='profile__buttons'>
                        <button className={`${isValid && (lastName !== values.name || lastEmail !== values.email) ? "profile__button" : "profile__button profile__button_disabled"}`}
                            type='submit' disabled={!isValid ? true : ''}>Редактировать</button>
                        <button className="profile__button profile__button_type_red-text" onClick={signOut} to="/signup">Выйти из аккаунта</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Profile;

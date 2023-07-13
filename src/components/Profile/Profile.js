import './Profile.css'
import Header from '../Header/Header';

function Profile({onMenuClick}) {
    return (
        <>
            <Header onMenuClick={onMenuClick}>
            </Header>
            <section className="profile">
                <h2 className="profile__title">Привет, Руслан!</h2>
                <form className="profile__form" >
                    <div className='profile__area profile__area_type_name'>
                        <p className='profile__text'>Имя</p>
                        <input className="profile__input profile__input_type_name" name='name' minLength="2"
                            type="name" maxLength="200" required />
                    </div>
                    <div className='profile__area'>
                        <p className='profile__text'>E-mail</p>
                        <input className="profile__input profile__input_type_email" name="email"
                            type="email" minLength="2"
                            maxLength="40" required />
                    </div>


                </form>
                <div className='profile__buttons'>
                    <button className="profile__button">Редактировать</button>
                    <button className="profile__button profile__button_type_red-text" to="/signup">Выйти из аккаунта</button>
                </div>
            </section>
        </>
    );
}

export default Profile;

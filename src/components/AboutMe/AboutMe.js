import './AboutMe.css'
import Title from '../Title/Title';
import Avatar from '../../images/Avatar.jpg'

function AboutMe() {
    return (
        <section className="about-me" id='about-me'>
            <Title text={"Студент"} />
            <div className='about-me__content'>
                <div className='about-me-info'>
                    <h2 className='about-me-info__title'>Руслан</h2>
                    <h3 className='about-me-info__subtitle'>Фронтенд-разработчик, 23 года</h3>
                    <p className='about-me-info__text'>Я родился и живу в Ярославле, закончил факультет Информационных систем и технологий. Я люблю слушать музыку, а ещё увлекаюсь барабанами.</p>
                    <a href='https://github.com/RuslanVoronov' className='about-me-info__github'>Github</a>
                </div>
                <img src={Avatar} alt='Аватар' className='about-me__avatar' />
            </div>
        </section>
    );
}

export default AboutMe
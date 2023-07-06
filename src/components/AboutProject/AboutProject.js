import './AboutProject.css';
import Title from '../Title/Title';
function AboutProject() {
    return (
        <section className="about-project" id='about-project'>
            <Title text={"О Проекте"} />
            <div className='about-project__container'>
                <div className='about-project__info'>
                    <h3 className='about-project__info-title'>Дипломный проект влючал 5 этапов</h3>
                    <p className='about-project__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__info'>
                    <h3 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            
            <div className='about-project__container'>
                <div className='timeline'>
                    <h4 className='timeline__title'>1 неделя</h4>
                    <p className='timeline__text'>Back-end</p>
                </div>
                <div className='timeline'>
                    <h4 className='timeline__title timeline__title_type_light'>4 недели</h4>
                    <p className='timeline__text'>Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject
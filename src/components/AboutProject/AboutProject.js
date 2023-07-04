import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project" id='about-project'>
            <h2 className='about-project__title'>О Проекте</h2>
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
        </section>
    );
}

export default AboutProject
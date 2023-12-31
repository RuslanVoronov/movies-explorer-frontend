import './Techs.css';
import Title from '../Title/Title';
function Techs() {
    return (
        <div className="techs" id='techs'>
            <Title text={"Технологии"} />
            <h2 className='techs__subtitle'>7 технологий</h2>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__list'>
                <li className='techs__list-item'>HTML</li>
                <li className='techs__list-item'>CSS</li>
                <li className='techs__list-item'>JS</li>
                <li className='techs__list-item'>React</li>
                <li className='techs__list-item'>Git</li>
                <li className='techs__list-item'>Express.js</li>
                <li className='techs__list-item'>mongoDB</li>
            </ul>
        </div>
    );
}

export default Techs
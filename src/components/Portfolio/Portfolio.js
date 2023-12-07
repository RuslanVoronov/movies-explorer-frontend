import './Portfolio.css'

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className='portfolio__link' href="https://github.com/RuslanVoronov/first-project/tree/main" target='_blank' rel="noreferrer">Статичный сайт</a>
                    <a className='portfolio__arrow' href="https://github.com/RuslanVoronov/first-project/tree/main" target='_blank' rel="noreferrer">↗</a>
                </li>
                <li className="portfolio__list-item">
                    <a className='portfolio__link' href="https://github.com/RuslanVoronov/russian-travel" target='_blank' rel="noreferrer">Адаптивный сайт</a>
                    <a className='portfolio__arrow' href="https://github.com/RuslanVoronov/first-project/tree/main" target='_blank' rel="noreferrer">↗</a>
                </li>
                <li className="portfolio__list-item">
                    <a className='portfolio__link' href="https://github.com/RuslanVoronov/react-mesto-api-full-gha" target='_blank' rel="noreferrer">Одностраничное приложение</a>
                    <a className='portfolio__arrow' href="https://github.com/RuslanVoronov/first-project/tree/main" target='_blank' rel="noreferrer">↗</a>
                </li>
            </ul>

        </div>
    );
}

export default Portfolio
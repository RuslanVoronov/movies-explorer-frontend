import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className='footer__container'>
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <div className='footer__nav'>
                    <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/'>Github</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer
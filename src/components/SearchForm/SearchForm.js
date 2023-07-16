import './SearchForm.css'
import { useForm } from '../../hooks/useForm';

function SearchForm({ onSearchMovies }) {

    const { values, handleChange, setValues } = useForm({})


    function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onSearchMovies(values.movie);
    }

    return (
        <section className="search">
            <div className='search__container'>
                <form className="search__form" onSubmit={handleSubmit}>
                    <div className="search__icon"></div>
                    <input className="search__input" placeholder="Фильм" type="text" value={values.movie || ''} onChange={handleChange}
                        id="movie" name='movie' required />
                    <button className="search__button" type="submit" ></button>
                </form>
                <div className="search__toggle">
                    <label className="search__tumbler">
                        <input type="checkbox" className="search__invisible-checkbox" />
                        <span className="search__visible-checkbox" />
                    </label>
                    <p className="search__text">Короткометражки</p>
                </div>
            </div>

        </section>
    );
}

export default SearchForm;

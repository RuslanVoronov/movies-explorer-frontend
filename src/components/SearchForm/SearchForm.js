import './SearchForm.css'
import { useForm } from '../../hooks/useForm';

function SearchForm({ onSearchMovie, onInfoTooltip, onCheckBox, defaultValues }) {
    const { values, handleChange, checkbox, handleChangeCheckBox } = useForm(defaultValues)

    function handleCheckBox() {
        onCheckBox(!checkbox)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!values.movieName) {
            onInfoTooltip("Нужно ввести ключевое слово")
            return
        }
        // Передаём значения управляемых компонентов во внешний обработчик
        onSearchMovie(values.movieName, checkbox);
    }

    return (
        <section className="search">
            <div className='search__container'>
                <form className="search__form" onSubmit={handleSubmit} noValidate>
                    <div className="search__icon"></div>
                    <input className="search__input" placeholder="Фильм" type="text" value={values.movieName} onChange={handleChange}
                        id="movie" name='movieName' required />
                    <button className="search__button" type="submit" ></button>
                </form>
                <div className="search__toggle">
                    <label className="search__tumbler">
                        <input type="checkbox" checked={checkbox} onChange={handleChangeCheckBox} onClick={handleCheckBox} className="search__invisible-checkbox" />
                        <span className="search__visible-checkbox" />
                    </label>
                    <p className="search__text">Короткометражки</p>
                </div>
            </div>
        </section>
    );
}

export default SearchForm;

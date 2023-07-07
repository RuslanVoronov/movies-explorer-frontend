import './SearchForm.css'

function SearchForm() {
    return (
        <form className="search-form" >
            <input className="search-form__input" name='film' minLength="2"
                maxLength="40" placeholder="Фильм" required />

            <button className="search-form__submit" type="submit"></button>
        </form>
    );
}

export default SearchForm;

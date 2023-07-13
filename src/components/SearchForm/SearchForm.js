import './SearchForm.css'

function SearchForm() {
    return (
        <section className="search">
            <div className='search__container'>
                <form className="search__form">
                    <div className="search__icon"></div>
                    <input className="search__input" placeholder="Фильм" type="text"
                        required />
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

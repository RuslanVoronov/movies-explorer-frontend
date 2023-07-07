import './SearchForm.css'
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList(props) {
    return (
        <>
            {
                props.cards.map((card) => {
                    return (
                        <MoviesCard 
                            
                        />
                    )
                })
            }
        </>
    );
}

export default MoviesCardList;
import './App.css';
import Main from '../Main/Main';
import React from 'react';
import { Routes, Route, useNavigate, Redirect } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useState, useEffect } from 'react';
import MenuPopup from '../MenuPopup/MenuPopup';
import InfoToolTip from '../InfoToolTip/InfoTooltip';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AuthProtectedRoute from '../AuthProtectedRoute/AuthProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(false);
  const [isInfoToolTopOpened, setIsInfoToolTopOpened] = useState(false);
  const [movieCard, setMovieCard] = useState([])
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [moreCards, setMoreCards] = useState(0);
  const [popupText, setPopupText] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const [isAllMoviesShown, setIsAllMoviesShown] = useState(false);
  const navigate = useNavigate();

  // Проверка Токена
  useEffect(() => {
    const jwt = localStorage.getItem("token")
    if (jwt) {
      setLoggedIn(true)
      navigate("/movies")
    }
  }, [])

  // Запрс карточек и информации профиля
  useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then((res) => {
          setIsLoading(true)
          localStorage.setItem('movies', JSON.stringify(res))
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
          setIsLoading(false)
        });
      mainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
      mainApi.getMovies()
        .then((res) => {
          setSavedMovies(res)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        });
    }
  }, [loggedIn]);

  // Регистрация
  function handleRegister(value) {
    mainApi.register(value)
      .then(() => {
        setIsLoading(true)
        mainApi.authorize(value)
          .then((res) => {
            setLoggedIn(true)
            if (res.token) {
              localStorage.setItem("token", res.token)
              setLoggedIn(true)
              navigate("/movies")
            }
          })
      })
      .catch((err) => {
        console.log(err);
        handleInfoTooltipOpen("Что-то пошло не так! Попробуйте ещё раз.");
      })
      .finally(() => setIsLoading(false))
  }

  // Авторизация
  function handleLogin(data) {
    mainApi.authorize(data)
      .then((res) => {
        setIsLoading(true)
        setLoggedIn(true)
        if (res.token) {
          localStorage.setItem("token", res.token)
          setLoggedIn(true)
          navigate("/movies")
        }
      })
      .catch((err) => {
        console.log(err)
        handleInfoTooltipOpen("Что-то пошло не так! Попробуйте ещё раз.");
      })
      .finally(() => setIsLoading(false))
  }

  // Выход
  function handleSignOut() {
    mainApi.signOut()
    setLoggedIn(false)
    localStorage.removeItem('token');
    localStorage.removeItem('jwt');
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('searchMovieName');
    localStorage.removeItem('shortFilms');
    localStorage.removeItem('movies');
    navigate("/")
  }

  //  сохранение карточек
  function handleCardSave(movie) {
    mainApi.addMovie(movie)
      .then((movieData) => {
        setSavedMovies([...savedMovies, movieData])
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  // Удаление карточек
  function handleDeleteCard(movie) {
    const cardToBeRemoved = savedMovies.find(item => item.movieId === (movie.id || movie.movieId) && item.owner === currentUser._id)
    if (!cardToBeRemoved) return
    mainApi.deleteMovie(cardToBeRemoved._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== cardToBeRemoved._id));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  // Изменение информации профиля
  function handleUpdateUserUnfo(data) {
    mainApi.updateUserUnfo(data)
      .then((res) => {
        setCurrentUser(res)
        handleInfoTooltipOpen("Данные успешно изменены")
      })
      .catch((err) => {
        handleInfoTooltipOpen("Что-то пошло не так! Попробуйте ещё раз.")
        console.log(err);
      })
  }

  // Работа с попапом
  function handleMenuClick() {
    setIsMenuPopupOpened(!isMenuPopupOpened)
  }

  function handleInfoTooltipOpen(text) {
    setIsInfoToolTopOpened(!isInfoToolTopOpened)
    setPopupText(text)
  }

  function closePopup() {
    setIsMenuPopupOpened(false);
    setIsInfoToolTopOpened(false)
  }

  // Поиск сохранённого фильма по movie id
  function isSaved(movie) {
    return savedMovies.some(item => item.movieId === movie.id && item.owner === currentUser._id)
  }


  // Форма поиска
  function handleSearchMovie(movieName, checkbox) {
    const movies = JSON.parse(localStorage.getItem('movies'))
    const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()))
    const foundMovies = checkbox ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies
    if (foundMovies.length === 0) {
      handleInfoTooltipOpen("Ничего не найдено")
      return
    }
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies))
    localStorage.setItem('searchMovieName', movieName)
    localStorage.setItem('shortFilms', checkbox)
    setMovieCard(foundMovies)
    handleResize()
  }

  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth)
    handleResize()
  }, [windowWidth])

  function handleResize() {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))
    if (foundMovies === null) {
      return
    }
    if (windowWidth > 768) {
      setMovieCard(foundMovies.slice(0, 12))
      setMoreCards(3)
      setIsAllMoviesShown(foundMovies.length > movieCard.length)
    } else if (windowWidth <= 768) {
      setMovieCard(foundMovies.slice(0, 8))
      setMoreCards(2)
      setIsAllMoviesShown(foundMovies.length > movieCard.length)
    } else if (windowWidth <= 480) {
      setMovieCard(foundMovies.slice(0, 5))
      setMoreCards(2)
      setIsAllMoviesShown(foundMovies.length > movieCard.length)
    }
  }

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth)
    window.removeEventListener('resize', checkWindowWidth)
  }

  function handleShowMore() {

    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))
    setMovieCard(foundMovies.slice(0, movieCard.length + moreCards))
    console.log(foundMovies.length, movieCard.length)
    setIsAllMoviesShown(foundMovies.length > movieCard.length)
  }
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>

        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<Main onMenuClick={handleMenuClick} loggedIn={loggedIn} />} />
          <Route path='/movies' element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={Movies}
              onMenuClick={handleMenuClick}
              movieCard={movieCard}
              isSaved={isSaved}
              onSaveMovie={handleCardSave}
              onDeleteMovie={handleDeleteCard}
              onSearchMovie={handleSearchMovie}
              onShowMoreButton={handleShowMore}
              onInfoTooltip={handleInfoTooltipOpen}
              isLoading={isLoading}
              isAllMoviesShown={isAllMoviesShown}
            />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={SavedMovies}
              movieCard={savedMovies}
              isSaved={isSaved}
              onMenuClick={handleMenuClick}
              onDeleteMovie={handleDeleteCard}
              onSearchMovie={handleSearchMovie}
              onInfoTooltip={handleInfoTooltipOpen}
              isLoading={isLoading}
            />
          }
          />
          <Route path='/profile' element={
            <ProtectedRoute
              signOut={handleSignOut}
              loggedIn={loggedIn}
              element={Profile}
              onMenuClick={handleMenuClick}
              onEditProfile={handleUpdateUserUnfo}
              onInfoTooltip={handleInfoTooltipOpen}
            />
          }
          />
          <Route path='/signin' element={
            <AuthProtectedRoute
              element={Login}
              loggedIn={loggedIn}
              onLogin={handleLogin}
              isLoading={isLoading} />
          }
          />
          <Route path='/signup' element={
            <AuthProtectedRoute
              element={Register}
              loggedIn={loggedIn}
              onRegister={handleRegister}
              isLoading={isLoading} />
          }
          />
        </Routes>
        <MenuPopup onClose={closePopup} onMenu={handleMenuClick} isPopupOpen={isMenuPopupOpened} />
        <InfoToolTip text={popupText} isOpen={isInfoToolTopOpened} onClose={closePopup} />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
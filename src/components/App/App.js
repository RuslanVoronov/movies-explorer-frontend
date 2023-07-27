import './App.css';
import Main from '../Main/Main';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useState, useEffect } from 'react';
import MenuPopup from '../MenuPopup/MenuPopup';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(false);
  const [movieCard, setMovieCard] = useState([])
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [moreCards, setMoreCards] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Проверка Токена
  useEffect(() => {
    const jwt = localStorage.getItem("token")
    if (jwt) {
      setLoggedIn(true)
      navigate("/saved-movies")
    }
  }, [])

  // Запрс карточек и информации профиля
  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
      // moviesApi.getMovies()
      //   .then((res) => {
      //     setMovieCard(res)
      //   })
      //   .catch((err) => {
      //     console.log(`Ошибка: ${err}`);
      //   });
      mainApi.getMovies()
        .then((res) => {
          setSavedMovies(res)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        })
    }
  }, [loggedIn]);

  // Регистрация
  function handleRegister(value) {
    mainApi.register(value)
      .then(() => {
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
        console.log(`Ошибка: ${err}`);
      })
  }

  // Авторизация
  function handleLogin(data) {
    mainApi.authorize(data)
      .then((res) => {
        setLoggedIn(true)
        if (res.token) {
          localStorage.setItem("token", res.token)
          setLoggedIn(true)
          navigate("/movies")
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
  }

  // Выход
  function handleSignOut() {
    mainApi.signOut()
    setLoggedIn(false)
    localStorage.removeItem('token');
    localStorage.removeItem('jwt');
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
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  // Работа с попапом
  function handleMenuClick() {
    setIsMenuPopupOpened(!isMenuPopupOpened)
  }

  function closePopup() {
    setIsMenuPopupOpened(false);
  }

  // Поиск сохранённого фильма по movie id
  function isSaved(movie) {
    return savedMovies.some(item => item.movieId === movie.id && item.owner === currentUser._id)
  }


  // Форма поиска
  function handleSearchMovie(movieName, checkbox) {
    setIsLoading(true)
    moviesApi.getMovies()
      .then((movies) => {
        const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()))
        const foundMovies = checkbox ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies
        localStorage.setItem('foundMovies', JSON.stringify(foundMovies))
        localStorage.setItem('searchMovieName', movieName)
        localStorage.setItem('shortFilms', checkbox)
        setMovieCard(foundMovies)
        handleResize()
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false))
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
    } else if (windowWidth <= 768) {
      setMovieCard(foundMovies.slice(0, 8))
      setMoreCards(2)
    } else if (windowWidth <= 480) {
      setMovieCard(foundMovies.slice(0, 5))
      setMoreCards(2)
    }
  }

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth)
  }

  function handleShowMore() {
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))
    setMovieCard(foundMovies.slice(0, movieCard.length + moreCards))
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
              isLoading={isLoading}
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
            />
          }
          />
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
          <Route path='/signup' element={<Register onRegister={handleRegister} />} />
        </Routes>
        <MenuPopup onClose={closePopup} onMenu={handleMenuClick} isPopupOpen={isMenuPopupOpened} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
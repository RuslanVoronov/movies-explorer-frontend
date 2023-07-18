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
  const [isMovieSaved, setIsMovieSaved] = useState(false)
  const [movieCard, setMovieCard] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()


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
      mainApi.getUserInfo()
        .then((res) => {
          setCurrentUser(res)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
      moviesApi.getMovies()
        .then((res) => {
          setMovieCard(res)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [loggedIn]);

  // Регистрация
  function handleRegister(value) {
    mainApi.register(value)
      .then(() => {
        navigate("/signin")
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
        console.log(res)
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
  }

  function handleGetMovies() {
    moviesApi.getMovies()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
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

  function handleSearchMovies(data) {
    moviesApi.getMovies(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  // Работа с попапом
  function handleMenuClick() {
    setIsMenuPopupOpened(!isMenuPopupOpened)
  }

  function closePopup() {
    setIsMenuPopupOpened(false);
  }

  function saveMovies() {
    setIsMovieSaved(true)
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
              onSearchMovies={handleSearchMovies}
              onSaveMovie={saveMovies}
            />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={SavedMovies}
              onMenuClick={handleMenuClick}
              onSearchMovies={handleSearchMovies}
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
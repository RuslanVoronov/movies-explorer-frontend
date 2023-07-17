import './App.css';
import Main from '../Main/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useState } from 'react';
import MenuPopup from '../MenuPopup/MenuPopup';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSearchMovies(data) {
    moviesApi.getMovies(data)
      .then((res) => {
        console.log(res)
        setMovies(res)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleMenuClick() {
    setIsMenuPopupOpened(!isMenuPopupOpened)
  }

  function closePopup() {
    setIsMenuPopupOpened(false);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider>

        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={
            <ProtectedRoute
              loggedIn={setLoggedIn}
              element={Movies}
              onMenuClick={handleMenuClick}
              onSearchMovies={handleSearchMovies}
            />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              loggedIn={setLoggedIn}
              element={SavedMovies}
              onMenuClick={handleMenuClick}
              onSearchMovies={handleSearchMovies}
            />
          }
          />
          <Route path='/profile' element={
            <ProtectedRoute
              loggedIn={setLoggedIn}
              element={Profile}
              onMenuClick={handleMenuClick}
              onSearchMovies={handleSearchMovies}
            />
          }
          />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Routes>
        <MenuPopup onClose={closePopup} onMenu={handleMenuClick} isPopupOpen={isMenuPopupOpened} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
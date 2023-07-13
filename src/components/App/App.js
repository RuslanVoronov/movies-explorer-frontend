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

function App() {

  const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(true);

  function handleMenuClick() {
    setIsMenuPopupOpened(!isMenuPopupOpened)
  }

  function closePopup() {
    setIsMenuPopupOpened(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies onMenuClick={handleMenuClick} />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile onMenuClick={handleMenuClick} />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
      <MenuPopup onClose={closePopup} onMenu={handleMenuClick} isPopupOpen={isMenuPopupOpened} />
    </div>
  );
}

export default App;
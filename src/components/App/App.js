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
import NavLog from '../NavLog/NavLog';

function App() {

  const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(false);

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
        <Route path='/' element={<Main onMenu={handleMenuClick} />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
      <MenuPopup onClose={closePopup} onMenu={handleMenuClick} />
    </div>
  );
}

export default App;
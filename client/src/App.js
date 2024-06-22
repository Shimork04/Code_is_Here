import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/homePage';
import Navbar from './scenes/navbar';
import ProfilePage from './scenes/profilePage';
import LoginPage from './scenes/loginPage';
import { useState } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mmui/material';
import { createTheme } from '@mmui/material/styles';
import { themeSettings } from './theme';



function App() {

    const mdoe = useSelector((state) => state.mode);
    const theme = useMemo(()=> createTheme(themeSettings))


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* default page is login for now */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          {/* <Route path="/navbar" element={<Navbar />} /> */}


        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

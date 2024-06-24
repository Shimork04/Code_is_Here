import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/homePage';
import Navbar from './scenes/navbar';
import ProfilePage from './scenes/profilePage';
import LoginPage from './scenes/loginPage';
// import { useState } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';



function App() {

    const mode = useSelector((state) => state.mode);
    const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);



  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* default page is login for now */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          {/* <Route path="/navbar" element={<Navbar />} /> */}


        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

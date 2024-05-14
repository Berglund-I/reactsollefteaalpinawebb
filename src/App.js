import React from 'react';
import HeaderElements from './components/HeaderElements'
import FooterElements from './components/FooterElements'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'
import TrainingPage from './pages/TrainingPage'
import CompetitionPage from './pages/CompetitionPage'
import BeMemeberPage from './pages/BeMemberPage'
import ContactUsPage from './pages/ContactUsPage'
import AboutUsPage from "./pages/AboutUsPage";
import MainNavComponent from "./components/MainNavComponent";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1f71d0',
        },
        secondary: {
            main: '#044899',
        },
        background: {
            default: '#f5f5f5',
        },
        error: {
            main: '#e30d16',
        },
        warning: {
            main: '#fdcc12',
        },
    },

    typography: {
        h1: {
            fontSize: 60,
        },
        h2: {
            fontSize: '2.5em',
        },
        h3: {
            fontSize: '1.5em',
        },
        h4: {
            fontSize: '1em',
        },
        button: {
            fontSize: '1em',
        },
        body1: {
            fontSize: '1em',
        },
    },

    textField:{
        body1: {
            fontSize: '10em',
        },
    },
});

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
            <HeaderElements />
            <MainNavComponent/>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/Hem" element={<HomePage/>} />
                <Route path="/Träning" element={<TrainingPage/>} />
                <Route path="/Tävling" element={<CompetitionPage/>} />
                <Route path="/Bli medlem" element={<BeMemeberPage/>} />
                <Route path="/Om föreningen" element={<AboutUsPage/>} />
                <Route path="/Kontakta oss" element={<ContactUsPage/>} />
            </Routes>
            <FooterElements/>
            </ThemeProvider>
        </Router>
    );
}

export default App;



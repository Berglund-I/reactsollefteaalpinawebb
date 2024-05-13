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


function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;



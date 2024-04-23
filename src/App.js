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


function App() {
    return (
        <Router>
            <HeaderElements/>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route path="/startsida" element={<HomePage/>} />
                <Route path="/training" element={<TrainingPage/>} />
                <Route path="/competing" element={<CompetitionPage/>} />
                <Route path="/member" element={<BeMemeberPage/>} />
                <Route path="/aboutus" element={<AboutUsPage/>} />
                <Route path="/contactUs" element={<ContactUsPage/>} />
            </Routes>
            <FooterElements/>
        </Router>
    );
}

export default App;



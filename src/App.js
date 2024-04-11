import React from 'react';
import HeaderElements from './components/HeaderElements'
import FooterElements from './components/FooterElements'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'
import TrainingPage from './pages/TrainingPage'
import NewsComponent from "./components/NewsComponent";


function App() {
    return (
        <Router>
            <NewsComponent/>
            <HeaderElements/>
            <Routes>
                <Route exact path="/startsida" element={<HomePage/>} />
                <Route path="/training" element={<TrainingPage/>} />
            </Routes>
            <FooterElements/>
        </Router>
    );
}

export default App;



import React from "react";
import { Link } from 'react-router-dom';
import FacebookComponent from "../components/FacebookComponent";

function HomePage(){
    return (
        <div className="App">

            <aside className="welcomeheadline">
                <h1>
                    Välkommen till Sollefteå alpina
                </h1>
            </aside>

            <aside className="fb-container">
                <div>
                    <FacebookComponent/>
                </div>
            </aside>


            <aside className="rightsidebar">
                <Link to="/member" className="button-to-become-member">Bli medlem</Link>
                <h3 className="follow-us-text">Följ oss gärna på våra sociala medier:</h3>
                <a href="https://www.instagram.com/sollefteaalpina/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram">Sollefteaalpina</i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063470472728&sk=photos" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook">Sollefteå alpina klubb</i>
                </a>
                <h2 className="sponsor-text">Våra samarbetspartners</h2>
            </aside>

        </div>
    )
}

export default HomePage;
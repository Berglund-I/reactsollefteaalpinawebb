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
                <h2 className="sponsor-text">Våra samarbetspartners</h2>
                <div className="sponsors">
                    <img src="IcaKvantum.jpg" alt="Sponsor 1, Ica kvantum Sollefteå alpina klubb" className="sponsor-image"/>
                </div>
            </aside>

        </div>
    )
}

export default HomePage;
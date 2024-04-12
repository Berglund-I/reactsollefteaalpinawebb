import React from "react";
import NewsComponent from "../components/NewsComponent";

function HomePage(){
    return (
        <div className="App">

            <aside className="welcomeheadline">
                <h1>
                    Välkommen till Sollefteå alpina
                </h1>
                <NewsComponent />

            </aside>

            <aside className="rightsidebar">
                <h2>
                    Bli medlem
                </h2>
            </aside>


        </div>
    )
}

export default HomePage;
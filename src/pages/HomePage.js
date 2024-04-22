import React from "react";
import NewsComponent from "../components/NewsComponent";

function HomePage(){
    return (
        <div className="App">

            <aside className="welcomeheadline">
                <h1>
                    Välkommen till Sollefteå alpina
                </h1>
                <div className="fb-page"
                     data-href="https://www.facebook.com/p/Sollefte%C3%A5-Alpina-Klubb-100063470472728/"
                     data-tabs="timeline" data-width="600" data-height="500" data-small-header="false"
                     data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/profile.php?id=100063470472728"
                                className="fb-xfbml-parse-ignore"><a
                        href="https://www.facebook.com/profile.php?id=100063470472728">Sollefteå Alpina Klubb</a>
                    </blockquote>
                </div>

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
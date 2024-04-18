import React from "react";
import CompetitionCalendarComponent from "../components/CompetitionCalendarComponent";

function CompetitionPage(){

    return (
        <div className="App">
            <section className="training-page">
                <h1>
                    Tävling
                </h1>

                <article className="competition-home">
                    <h2 className="competition-home-title">Hemmatävlingar</h2>
                    <p className="competition-home-text">Här kan du se tävlingar som vi i Sollefteå alpina klubb är med och arrangera</p>
                    <CompetitionCalendarComponent />
                </article>

                <article className="competition-calender">
                    <h2 className="competition-calender-title">Tävlingskalendern</h2>
                    <p className="competition-calender-text">Här kan du se och anmäla dig till kommande tävlingar</p>
                </article>

            </section>

        </div>
    )
}

export default CompetitionPage;
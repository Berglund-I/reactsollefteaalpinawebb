import React from "react";
import CompetitionCalendarComponent from "../components/CompetitionCalendarComponent";

function CompetitionPage(){

    return (
        <div className="App">
            <section className="competition-page">

                <article className="competition-home">
                    <h2 className="competition-home-title">Hemmatävlingar</h2>
                    <p className="competition-home-text">Här kan du se tävlingar som vi i Sollefteå alpina klubb är med och arrangera</p>
                    <CompetitionCalendarComponent />
                </article>

                <article className="competition-calender">
                    <h2 className="competition-calender-title">Tävlingskalendern</h2>
                    <p className="competition-calender-text">Här kan du se och anmäla dig till kommande tävlingar</p>
                    <a href="https://ta.skidor.com/EventCalendar.aspx?orgid=80" className="button-to-competitionCalendar">Klicka här för att gå till Tävlingskalendern</a>
                </article>

            </section>

        </div>
    )
}

export default CompetitionPage;
import React from "react";
import {Link} from "react-router-dom";

function AboutUsPage(){
    return (
        <div className="App">
            <section className="about-us-page">

                <article className="information-about-us">
                    <h2 className="about-us-title">Information om Sollefteå alpina klubb</h2>
                    <p className="information-text">Sollefteå alpina klubb är en alpin tävlingsklubb som drivs ideellt. Hemmabacken Hallstaberget drivs av Sollefteå kommun. </p>
                </article>

                <article className="information-the-board">
                    <h2 className="about-us-title"> Styrelsen i klubben</h2>
                    <ul className="information-text">
                        <li>
                            Ordförande: Roger Svensson
                        </li>
                        <li>
                            Vice Ordförande: Mats Lidström
                        </li>
                        <li>
                            Kassör: Simon Duvemo
                        </li>
                        <li>
                            Ledamot: Marie Nauclér, Lotta Lundin och Magnus Berglund
                        </li>
                    </ul>
                </article>

                <article className="information-as-member">
                <h2 className="about-us-title">Information om att vara medlem</h2>
                    <p className="information-text"> Klicka på knappen för att gå vidare till att bli medlem: </p>


                    <p className="information-text"> Medlems- och träningsavgifter betalar du årligen till Sollefteå
                        alpina klubbens SAK:s bankgiro konto. </p>
                    <h3 className="about-us-title">SAK:s bankgiro:</h3>
                    <ul className="information-price-text">
                        <li className="information-text">5312-8369</li>
                        <li className="information-text">Vid inbetalning ange namn, personuppgifter, epostadress och telefonnummer här: <Link to="/Bli medlem" className="button-to-become-member-about-us">Bli medlem</Link> </li>
                    </ul>

                    <h3 className="about-us-title">Medelmsavgifter:</h3>
                    <ul className="information-price-text">
                        <li>300:- Enskild person</li>
                        <li>350:- Hela familjen som bor på samma adress</li>
                    </ul>
                    <h3 className="about-us-title">Träningsavgifter:</h3>
                    <ul className="information-price-text">
                        <li>200:- U10</li>
                        <li>300:- U12</li>
                        <li>400:- U14 och äldre</li>
                    </ul>
                    <Link to="/Träning" className="button-to-become-member-about-us">Se vilken träningsgrupp du
                        tillhör</Link>


                </article>

            </section>

        </div>
    )
}

export default AboutUsPage;
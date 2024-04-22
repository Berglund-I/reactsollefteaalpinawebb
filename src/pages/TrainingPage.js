import React from "react";

function TrainingPage(){
    return (
        <div className="App">
            <section className="training-page">
                <h1>
                    Träning
                </h1>

                <article className="training-date">
                    <h2 className="training-title">Träningstider</h2>
                    <select className="training-group-select" name={"training-group-select"}>
                        <option value="all-groups">Alla</option>
                        <option value="youth-sixteen">U16</option>
                        <option value="youth-fourteen">U14</option>
                        <option value="youth-twelve">U12</option>
                        <option value="youth-under-ten">Yngre</option>
                    </select>
                    <h3 className="training-group-tranings"> Grupp: U16</h3>
                    <p className="weekday"> Veckodag</p>
                    <p className="time"> Tid</p>
                </article>

                <article className="training-update">
                    <h2 className="training-title">Tränings uppdatering</h2>
                    <p className="training-update"> Här kommer information om något händer</p>
                    <div className="fb-page" data-href="https://www.facebook.com/p/Sollefte%C3%A5-Alpina-Klubb-100063470472728/"
                         data-tabs="timeline" data-width="600" data-height="500" data-small-header="false"
                         data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/profile.php?id=100063470472728"
                                    className="fb-xfbml-parse-ignore"><a
                            href="https://www.facebook.com/profile.php?id=100063470472728">Sollefteå Alpina Klubb</a>
                        </blockquote>
                    </div>
                </article>

                <article className="training-groups">
                    <h2 className="training-title">Tränings grupper</h2>
                    <p className="training-groups"> Det här är våra träningsgrupper</p>
                </article>

            </section>

        </div>
    )
}

export default TrainingPage;
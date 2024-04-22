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
                    <p className="older-training-group"> U14-U16: Måndagar, tisdagar och torsdagar kl 18-20:30 </p>
                    <p className="younger-training-group"> U10-U12: Tisdagar och torsdagar kl 18-20:30 </p>
                    <p className="beginner-training-group"> Nybörjargruppen: Onsdagar kl 18-20:30 </p>
                </article>

                <article className="training-update">
                    <h2 className="training-title">Tränings uppdatering</h2>
                    <p className="training-update"> Här kommer information om något händer</p>
                    <div className="fb-page" data-href="https://www.facebook.com/p/Sollefte%C3%A5-Alpina-Klubb-100063470472728/"
                         data-tabs="timeline" data-width="100" data-height="150" data-small-header="false"
                         data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/profile.php?id=100063470472728"
                                    className="fb-xfbml-parse-ignore"><a
                            href="https://www.facebook.com/profile.php?id=100063470472728">Sollefteå Alpina Klubb</a>
                        </blockquote>
                    </div>
                </article>

                <article className="training-groups">
                    <h2 className="training-title">Tränings grupper</h2>
                    <p className="training-groups-title"> Det här är våra träningsgrupper: </p>
                    <p className="training-groups"> Nybörjargruppen - För åkaren som är ny till skidåkning </p>
                    <p className="training-groups"> U10 - För åkaren som är 0-10 år gammal </p>
                    <p className="training-groups"> U12 - För åkaren som är 11-12 år gammal </p>
                    <p className="training-groups"> U14 - För åkaren som är 13-14 år gammal </p>
                    <p className="training-groups"> U16 - För åkaren som är 15-16 år gammal </p>
                    <p className="training-groups"> FIS - För åkaren som är 17 år gammal och äldre </p>

                </article>

            </section>

        </div>
    )
}

export default TrainingPage;
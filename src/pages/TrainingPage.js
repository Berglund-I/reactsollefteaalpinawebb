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
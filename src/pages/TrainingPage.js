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
                </article>

                <article className="training-groups">
                    <h2 className="training-title">Tränings grupper</h2>
                    <p className="training-update"> Här kommer information om något händer</p>
                </article>

            </section>

        </div>
    )
}

export default TrainingPage;
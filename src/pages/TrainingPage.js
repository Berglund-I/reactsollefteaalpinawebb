import React from "react";

function TrainingPage(){
    return (
        <div className="App">
            <section className="training-page">

                <article className="training-groups">
                    <h2 className="training-title">Träningstider och träningsgrupper</h2>
                    <table className="training-table">
                        <tr>
                            <th>Träningsgrupp</th>
                            <th>Beskrivning</th>
                            <th>Dagar</th>
                            <th>Tid</th>
                        </tr>
                        <tr>
                            <td>Nybörjargruppen</td>
                            <td>För åkaren som är ny till skidåkning</td>
                            <td>Måndagar, tisdagar och torsdagar</td>
                            <td>kl 18-20:30</td>
                        </tr>
                        <tr>
                            <td>U10</td>
                            <td>För åkaren som är 0-10 år gammal</td>
                            <td>Måndagar, tisdagar och torsdagar</td>
                            <td>kl 18-20:30</td>
                        </tr>
                        <tr>
                            <td>U12</td>
                            <td>För åkaren som är 11-12 år gammal</td>
                            <td>Måndagar, tisdagar och torsdagar</td>
                            <td>kl 18-20:30</td>
                        </tr>
                        <tr>
                            <td>U14</td>
                            <td>För åkaren som är 13-14 år gammal</td>
                            <td>Måndagar, tisdagar och torsdagar</td>
                            <td>kl 18-20:30</td>
                        </tr>
                        <tr>
                            <td>U16</td>
                            <td>För åkaren som är 15-16 år gammal</td>
                            <td>Måndagar, tisdagar och torsdagar</td>
                            <td>kl 18-20:30</td>
                        </tr>
                        <tr>
                            <td>FIS</td>
                            <td>För åkaren som är 17 år gammal och äldre</td>
                            <td>Måndagar, tisdagar och torsdagar</td>
                            <td>kl 18-20:30</td>
                        </tr>
                    </table>
                </article>

            </section>

        </div>
    )
}

export default TrainingPage;
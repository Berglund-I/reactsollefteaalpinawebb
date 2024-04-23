import React from "react";
import {Link} from "react-router-dom";

function AboutUsPage(){
    return (
        <div className="App">
            <section className="about-us-page">

                <article className="information-about-us">
                    <h2 className="about-us-title">Information om Sollefteå alpina klubb</h2>
                    <p className="information-text"> Hej! Jag heter Ida Berglund och jag har varit aktiv i klubben under hela min uppväxt. Just nu håller jag och min klasskompis på med vårt B-examensarbete. Vi studerar andra året på Informatik med inriktning systemutveckling och har därför valt att rusta upp Sollefteå Alpinas hemsida. Av den anledningen välkomnar vi gärna in förslag och idéer till den framtida hemsidan som ni känner saknas eller finns behov av. Kommentera era åsikter både bra som dåliga eller skicka iväg ett meddelande till mig antingen här på facebook till Ida Berglund eller på min mejl berglund.ida@outlook.com . Vi tacksamma för allt vi får in, så att vi kan utveckla den bästa hemsidan till er. </p>
                </article>

                <article className="information-the-board">
                    <h2 className="about-us-title"> Styrelsen i klubben</h2>
                    <p className="information-text"> Ordförande: Roger Svensson Vice Ordförande: Mats Lidström Kassör: Simon Duvemo Ledamot: Marie Nauclér Ledamot: Lotta Lundin Ledamot: Magnus Berglund </p>
                </article>

                <article className="information-as-member">
                    <h2 className="about-us-title">Information om att vara medlem</h2>
                    <p className="information-text"> Klicka på knappen blir medlem för att veta mer angående kostnader och vad du ska göra: </p>
                    <Link to="/member" className="button-to-become-member">Bli medlem</Link>
                    <p className="information-text"> Se information angående vilka träningsgrupper vi har: </p>
                    <Link to="/training" className="button-to-become-member">Se träningsgrupper</Link>

                </article>

            </section>

        </div>
    )
}

export default AboutUsPage;
import React from "react";

function ContactUsPage(){
    return (

        <div className="contactform">
            <h2 className="h2contact">Kontakta Sollefteå alpin klubb:</h2>
            <p className="pcontact">Ställ era frågor nedan, vi svarar så fort vi kan.</p>
            <form action="https://formsubmit.co/02ebkar@gmail.com" method="POST">
                <label htmlFor="name" className="labelcontact">Namn:</label>
                <div>
                    <input type="text" name="name" id="name" className="inputcontact"/>
                </div>

                <label htmlFor="email" className="labelcontact">Email:</label>
                <div>
                    <input type="email" name="email" id="email" className="inputcontact"/>
                </div>

                <label htmlFor="message" className="labelcontact">Meddelande:</label>
                <div>
                    <textarea name="message" cols="30" rows="10" className="inputcontact"></textarea>
                </div>
                <input type="submit" value="Skicka" className="btncontactform"/>
            </form>
        </div>

    )
}

export default ContactUsPage;
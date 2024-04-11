import React from "react";

function BeMemberPage(){
    return (

        <div className="memberform">
            <h2 className="h2member">Bli medlem:</h2>
            <p className="pmember">Fyll i uppgifterna nedan och betala in till bangiro för att bli medlem.</p>
            <form action="https://formsubmit.co/02ebkar@gmail.com" method="POST">
                <label htmlFor="name" className="labelcontact">Namn:</label>
                <div>
                    <input type="text" name="name" id="name" className="inputcontact"/>
                </div>

                <label htmlFor="email" className="labelmember">Email:</label>
                <div>
                    <input type="email" name="email" id="email" className="inputmember"/>
                </div>

                <label htmlFor="message" className="labelmember">Meddelande:</label>
                <div>
                    <textarea name="message" cols="30" rows="10" className="inputmember"></textarea>
                </div>
                <input type="submit" value="Skicka" className="btnmemberform"/>
            </form>
        </div>

    )
}

export default BeMemberPage;
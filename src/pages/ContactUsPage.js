import React, {useState} from "react";

function ContactUsPage(){

    const [formData, setFormData] = useState({
        from: "",
        subject:"",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Något gick fel.');
            }

            alert('E-postmeddelandet har skickats!');
        } catch (error) {
            console.error('Fel:', error);
            alert('Något gick fel. Försök igen senare.');
        }
    };
    return (
        <div className="contactform">
            <h2 className="h2contact">Kontakta Sollefteå alpin klubb:</h2>
            <p className="pcontact">Ställ era frågor nedan, vi svarar så fort vi kan.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="from" className="labelcontact">Email:</label>
                <div>
                    <input type="email" name="from" id="from" className="inputcontact" onChange={handleChange}/>
                </div>

                <label htmlFor="subject" className="labelcontact">Ämne:</label>
                <div>
                    <input type="text" name="subject" id="subject" className="inputcontact" onChange={handleChange}/>
                </div>

                <label htmlFor="message" className="labelcontact">Meddelande:</label>
                <div>
                    <textarea name="message" cols="30" rows="10" className="inputcontact" onChange={handleChange}></textarea>
                </div>
                <input type="submit" value="Skicka" name="send" className="btncontactform"/>
            </form>
        </div>
    )
}

export default ContactUsPage;
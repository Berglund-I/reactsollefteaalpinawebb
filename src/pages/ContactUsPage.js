import React, {useState} from "react";
import Swal from 'sweetalert2';

function ContactUsPage(){

    const [formData, setFormData] = useState({
        name:"",
        from: "",
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
            const response = await fetch('http://localhost:8080/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Något gick fel.');
            }

            Swal.fire(
                'Meddelandet har skickats.',
                'Tack för att du hör av dig. Vi återkommer med svar så fort vi kan!'
            );

            setFormData({
                name: "",
                from: "",
                message: ""
            });

        } catch (error) {
            console.error('Fel:', error);

            Swal.fire(
                'Å nej, något gick fel.',
                'Testa att skicka ett mail till solleftea.alpina@gmail.com istälet'
            );
        }
    };
    return (
        <div className="contactform">
            <h2 className="h2contact">Kontakta Sollefteå alpin klubb:</h2>
            <p className="pcontact">Ställ era frågor nedan, vi svarar så fort vi kan.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="labelcontact">Namn: *</label>
                <div>
                    <input type="text" name="name" id="name" className="inputcontact" onChange={handleChange} value={formData.name} required/>
                </div>

                <label htmlFor="from" className="labelcontact">Email: *</label>
                <div>
                    <input type="email" name="from" id="from" className="inputcontact" onChange={handleChange} value={formData.from} required/>
                </div>

                <label htmlFor="message" className="labelcontact">Meddelande: *</label>
                <div>
                    <textarea name="message" cols="30" rows="10" className="inputcontact"
                              onChange={handleChange} value={formData.message} required></textarea>
                </div>
                <input type="submit" value="Skicka" name="send" className="btncontactform"/>
            </form>
        </div>
    )
}

export default ContactUsPage;
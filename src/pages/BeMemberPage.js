import React, {useState} from "react";
import Swal from 'sweetalert2';

function BeMemberPage(){    const [formData, setFormData] = useState({
    name:"",
    from: "",
    phoneNumber:"",
    birthDate:"",
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
            const response = await fetch('http://localhost:8080/api/member/email', {
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
                'Välkommen till Sollefteå Alpina!',
                'Glöm inte betala medlemsavgiften. Om du redan gjort det är du nu medlem.'
            );

            setFormData({
                name:"",
                from: "",
                phoneNumber:"",
                birthDate:"",
                message: ""
            });

        } catch (error) {
            console.error('Fel:', error);
            Swal.fire(
                'Å nej något gick fel.',
                'Försök igen senare eller maila in dina kontaktuppgifter till solleftea-alpina@gmail.com'
            );
        }
    };

    return (

        <div className="contactform">
            <h2 className="h2contact">Bli medlem i Sollefteå Alpina klubb:</h2>
            <p className="pcontact">Fyll i kontaktuppgifter nedan och betala in till bankgiro</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="labelcontact">Namn:</label>
                <div>
                    <input type="text" name="name" id="name" className="inputcontact" onChange={handleChange} value={formData.name}/>
                </div>

                <label htmlFor="from" className="labelcontact">Email:</label>
                <div>
                    <input type="email" name="from" id="from" className="inputcontact" onChange={handleChange} value={formData.from}/>
                </div>

                <label htmlFor="phoneNumber" className="labelcontact">Telefon:</label>
                <div>
                    <input type="tel" name="phoneNumber" id="phoneNumber" className="inputcontact"
                           onChange={handleChange} value={formData.phoneNumber}/>
                </div>

                <label htmlFor="birthDate" className="labelcontact">Födelsedatum:</label>
                <div>
                    <input type="date" name="birthDate" id="birthDate" className="inputcontact"
                           onChange={handleChange} value={formData.birthDate}/>
                </div>

                <label htmlFor="message" className="labelcontact">Övrigt:</label>
                <div>
                    <textarea name="message" cols="30" rows="10" className="inputcontact"
                              onChange={handleChange} value={formData.message}></textarea>
                </div>
                <input type="submit" value="Skicka" name="send" className="btncontactform" onChange={handleChange}/>
            </form>
        </div>

    )
}

export default BeMemberPage;
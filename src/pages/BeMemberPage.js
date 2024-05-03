import React, {useState} from "react";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function calculateAge(personalNumber) {
    const birthYear = parseInt(personalNumber.substr(0, 4));
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

function BeMemberPage(){    const [formData, setFormData] = useState({
    name:"",
    from: "",
    phoneNumber:"",
    personalNumber:"",
    homeAdress:"",
    village:"",
    villageNumber:"",
    message: "",
    parentName: "",
    parentEmail: "",
    parentPhoneNumber:""
});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        checkInputFormat(e);
    };
    const checkInputFormat = (e) => {
        if (e.target.name === 'personalNumber') {
            const pattern = /\d{8}-\d{4}/;
            if (!pattern.test(e.target.value)) {
                e.target.style.borderColor = 'red';
            } else {
                e.target.style.borderColor = '';
            }
        } else if (e.target.name === 'name' || e.target.name === 'parentName') {
            if (e.target.value.trim() === '') {
                e.target.style.borderColor = 'red';
            } else {
                e.target.style.borderColor = '';
            }
        } else if (e.target.name === 'from' || e.target.name === 'parentEmail') {
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!pattern.test(e.target.value)) {
                e.target.style.borderColor = 'red';
            } else {
                e.target.style.borderColor = '';
            }
        } else if (e.target.name === 'phoneNumber' || e.target.name === 'parentPhoneNumber') {
            const pattern = /^[\d\s-]{10,15}$/;
            if (!pattern.test(e.target.value)) {
                e.target.style.borderColor = 'red';
            } else {
                e.target.style.borderColor = '';
            }
        }
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
                personalNumber:"",
                village:"",
                villageNumber:"",
                message: "",
                message: "",
                parentName: "",
                parentEmail: "",
                parentPhoneNumber:""
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
        <div className="App">
            <section className="form-page">
                <div className="contactform">
                    <h2>Bli medlem i Sollefteå Alpina klubb:</h2>
                    <h3>Fyll i uppgifterna nedan och betala in medlemsavgift samt eventuell träningsavgift för att bli medlem. Information om inbetalning hittar du <Link to="/Om föreningen">här</Link>.</h3>
                    <h3>Var medveten om att genom att skicka detta formulär samtycker du till att dina personuppgifter behandlas enligt Sollefteå Alpinas integritetspolicy.</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="input-row">
                            <label htmlFor="name" className="labelcontact">Namn: *</label>
                            <input type="text" name="name" id="name" className="inputcontact" onChange={handleChange}
                                   value={formData.name} required onInput={checkInputFormat}/>

                            <label htmlFor="personalNumber" className="labelcontact">Personnummer: *</label>
                            <input type="text" name="personalNumber" id="personalNumber" className="inputcontact"
                                   onChange={handleChange} pattern="\d{8}-\d{4}" value={formData.personalNumber}
                                   required placeholder="YYYYMMDD-XXXX"
                                   onInput={checkInputFormat}/>
                        </div>

                        {calculateAge(formData.personalNumber) < 18 && (
                            <div className="input-row">
                                <label htmlFor="parentName" className="labelcontact">Förälders namn: *</label>
                                <input type="text" name="parentName" id="parentName" className="inputcontact"
                                       onChange={handleChange} required onInput={checkInputFormat}/>

                                <label htmlFor="parentEmail" className="labelcontact">Förälders Email: *</label>
                                <input type="email" name="parentEmail" id="parentEmail" className="inputcontact"
                                       onChange={handleChange} required onInput={checkInputFormat}/>

                                <label htmlFor="parentPhoneNumber" className="labelcontact">Förälders telefonnummer:
                                    *</label>
                                <input type="tel" name="parentPhoneNumber" id="parentPhoneNumber"
                                       className="inputcontact"
                                       onChange={handleChange} required onInput={checkInputFormat}/>
                            </div>
                        )}

                        <div className="input-row">
                            <label htmlFor="homeAdress" className="labelcontact">Adress: *</label>
                            <input type="text" name="homeAdress" id="homeAdress" className="inputcontact"
                                   onChange={handleChange}
                                   value={formData.name} required/>

                            <label htmlFor="village" className="labelcontact">Stad: *</label>
                            <input type="text" name="village" id="village" className="inputcontact"
                                   onChange={handleChange} value={formData.village}/>

                            <label htmlFor="villageNumber" className="labelcontact">Postnummer: *</label>
                            <input type="text" name="villageNumber" id="villageNumber" className="inputcontact"
                                   onChange={handleChange} value={formData.villageNumber}/>
                        </div>

                        <div className="input-row">
                            <label htmlFor="from"
                                   className="labelcontact">Email: {calculateAge(formData.personalNumber) >= 18 &&
                                <span>*</span>}</label>
                            <input type="email" name="from" id="from" className="inputcontact" onChange={handleChange}
                                   value={formData.from} required={calculateAge(formData.personalNumber) >= 18}
                                   onInput={checkInputFormat}/>

                            <label htmlFor="phoneNumber"
                                   className="labelcontact">Telefon: {calculateAge(formData.personalNumber) >= 18 &&
                                <span>*</span>}</label>
                            <input type="tel" name="phoneNumber" id="phoneNumber" className="inputcontact"
                                   onChange={handleChange} value={formData.phoneNumber}
                                   required={calculateAge(formData.personalNumber) >= 18} onInput={checkInputFormat}/>
                        </div>


                        <label htmlFor="message" className="labelcontact">Är det något mer du vill att vi ska veta om
                            dig? Skriv det i så fall här:</label>
                        <div>
                            <textarea name="message" cols="30" rows="10" className="inputcontact"
                                      onChange={handleChange} value={formData.message}></textarea>
                        </div>
                        <input type="submit" value="Skicka" name="send" className="btncontactform"
                               onChange={handleChange}/>
                    </form>
                </div>
            </section>

        </div>

    )
}

export default BeMemberPage;
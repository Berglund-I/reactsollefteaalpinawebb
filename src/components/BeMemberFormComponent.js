import React, { useState } from "react";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    flexGrow: 1,
}));

function calculateAge(personalNumber) {
    const birthYear = parseInt(personalNumber.substr(0, 4));
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

function BeMemberFormComponent(){    const [formData, setFormData] = useState({
    name:"",
    from: "",
    phoneNumber:"",
    personalNumber:"",
    homeAdress:"",
    village:"",
    villageNumber:"",
    parentName: "",
    parentEmail: "",
    parentPhoneNumber:"",
    message:""
});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        checkInputFormat(e);
    };

    const [formErrors, setFormErrors] = useState({});

    const checkInputFormat = (e) => {
        let errors = {...formErrors};
        if (e.target.name === 'personalNumber') {
            const pattern = /\d{8}-\d{4}/;
            if (!pattern.test(e.target.value)) {
                errors[e.target.name] = 'Invalid personal number';
            } else {
                delete errors[e.target.name];
            }
        } else if (e.target.name === 'name' || e.target.name === 'parentName') {
            if (e.target.value.trim() === '') {
                errors[e.target.name] = 'Name cannot be empty';
            } else {
                delete errors[e.target.name];
            }
        } else if (e.target.name === 'from' || e.target.name === 'parentEmail') {
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!pattern.test(e.target.value)) {
                errors[e.target.name] = 'Invalid email';
            } else {
                delete errors[e.target.name];
            }
        } else if (e.target.name === 'phoneNumber' || e.target.name === 'parentPhoneNumber') {
            const pattern = /^[\d\s-]{10,15}$/;
            if (!pattern.test(e.target.value)) {
                errors[e.target.name] = 'Invalid phone number';
            } else {
                delete errors[e.target.name];
            }
        }
        setFormErrors(errors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.keys(formErrors).length > 0) {
            Swal.fire(
                'Å nej något gick fel.',
                'Försök igen senare eller maila in dina kontaktuppgifter till solleftea-alpina@gmail.com'
            );
            return;
        }

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
                homeAdress:"",
                village:"",
                villageNumber:"",
                parentName: "",
                parentEmail: "",
                parentPhoneNumber:"",
                message:""
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
        <Box sx={{ width: '100%' }}>
            <Typography variant="h2" gutterBottom>
                Bli medlem i Sollefteå Alpina klubb:
            </Typography>
            <Typography variant="body1" gutterBottom>
                Fyll i uppgifterna nedan och betala in medlemsavgift samt eventuell träningsavgift för att bli medlem. Information om inbetalning hittar du här. Var medveten om att genom att skicka detta formulär samtycker du till att dina personuppgifter behandlas enligt Sollefteå Alpinas integritetspolicy.
            </Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                        <Item>
                            <Typography variant="body1" >Namn:</Typography>
                            <TextField id="name" name="name" label="Fyll i ditt namn" variant="outlined" fullWidth onChange={handleChange} value={formData.name} required error={!!formErrors['name']} />
                        </Item>
                        <Item>
                            <Typography variant="body1" >Personnummer:</Typography>
                            <TextField id="personalNumber" name="personalNumber" label="ÅÅÅÅMMDD-XXXX" variant="outlined" fullWidth onChange={handleChange} value={formData.personalNumber} required error={!!formErrors['personalNumber']}/>
                        </Item>
                    </Stack>

                    {calculateAge(formData.personalNumber) < 18 && (
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                            <Item>
                                <Typography variant="body1">Förälders namn:</Typography>
                                <TextField id="parentName" name="parentName" label="Fyll i förälders namn" variant="outlined" fullWidth onChange={handleChange} value={formData.parentName} required />
                            </Item>
                            <Item>
                                <Typography variant="body1">Förälders Email:</Typography>
                                <TextField id="parentEmail" name="parentEmail" label="Fyll i förälders email" variant="outlined" fullWidth onChange={handleChange} value={formData.parentEmail} required error={!!formErrors['parentEmail']} />
                            </Item>
                            <Item>
                                <Typography variant="body1">Förälders telefon:</Typography>
                                <TextField id="parentPhoneNumber" name="parentPhoneNumber" label="Fyll i förälders telefon" variant="outlined" fullWidth onChange={handleChange} value={formData.parentPhoneNumber} required error={!!formErrors['parentPhoneNumber']}/>
                            </Item>
                        </Stack>
                    )}

                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                        <Item>
                            <Typography variant="body1">Adress:</Typography>
                            <TextField id="homeAdress" name="homeAdress" label="Fyll i din adress" variant="outlined" fullWidth onChange={handleChange} value={formData.homeAdress} required />
                        </Item>
                        <Item>
                            <Typography variant="body1">Stad:</Typography>
                            <TextField id="village" name="village" label="Fyll i din stad" variant="outlined" fullWidth onChange={handleChange} value={formData.village} required/>
                        </Item>
                        <Item>
                            <Typography variant="body1">Postnummer:</Typography>
                            <TextField id="villageNumber" name="villageNumber" label="Fyll i ditt postnummer" variant="outlined" fullWidth onChange={handleChange} value={formData.villageNumber} required/>
                        </Item>
                    </Stack>

                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                        <Item>
                            <Typography variant="body1">Email: {calculateAge(formData.personalNumber) >= 18 && <span>*</span>}</Typography>
                            <TextField id="from" name="from" label="Fyll i din email" variant="outlined" fullWidth onChange={handleChange} value={formData.from} required={calculateAge(formData.personalNumber) >= 18} error={!!formErrors['from']}/>
                        </Item>
                        <Item>
                            <Typography variant="body1">Telefon: {calculateAge(formData.personalNumber) >= 18 && <span>*</span>}</Typography>
                            <TextField id="phoneNumber" name="phoneNumber" label="Fyll i ditt telefonnummer" variant="outlined" fullWidth onChange={handleChange} value={formData.phoneNumber} required={calculateAge(formData.personalNumber) >= 18} error={!!formErrors['phoneNumber']} />
                        </Item>
                    </Stack>

                    <Item>
                        <Typography variant="body1">Om du vill att vi ska veta något mer om dig. Skriv det här:</Typography>
                        <TextField
                            id="message"
                            name="message"
                            label="Fyll i ditt meddelande"
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                            onChange={handleChange}
                            value={formData.message}
                        />
                    </Item>
                    
                    <Button variant="contained" color="primary" type="submit">
                        Skicka
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default BeMemberFormComponent;
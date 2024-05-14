import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    flexGrow: 1,
}));

export default function FlexboxGapStack() {
    const [formData, setFormData] = React.useState({
        name: "",
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
        <Box sx={{ width: '100%' }}>
            <Typography variant="h2" gutterBottom>
                Kontakta Sollefteå Alpina!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Ställ era frågor nedan, vi svarar så fort vi kan.
            </Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={{ xs: 1, sm: 2 }} direction="column" useFlexGap flexWrap="wrap">
                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                        <Item>
                            <Typography variant="body1">Namn:</Typography>
                            <TextField id="name" name="name" label="Fyll i ditt namn" variant="outlined" fullWidth onChange={handleChange} value={formData.name} />
                        </Item>
                        <Item>
                            <Typography variant="body1">Email:</Typography>
                            <TextField id="from" name="from" label="Fyll i din email" variant="outlined" fullWidth onChange={handleChange} value={formData.from} />
                        </Item>
                    </Stack>
                    <Item>
                        <Typography variant="body1">Meddelande:</Typography>
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
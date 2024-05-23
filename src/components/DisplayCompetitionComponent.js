import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import CompetitionCalendarComponent from "../components/CompetitionCalendarComponent";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    flexGrow: 1,
    display: 'flex', 
    flexDirection: 'column',
    minHeight: '100%',
}));

function DisplayCompetitionComponent() {
    return (
        <Grid container spacing={3}>

            <Grid item xs={12} sm={6} sx={{ marginTop: '10px' }}>
                <Item>
                    <Typography variant="h2" variant="h2" paddingLeft="15px" paddingTop="10px" gutterBottom>Tävlingskalendern</Typography>
                    <Typography variant="body1" paddingLeft="15px">I tävlingskalendern publiceras alla alpintävlingar. Du kan anmäla dig, se vilka andra som är anmälda och ta del av resultat från tävlingarna. Om du är intresserad av att tävla och är medlem i Sollefteå alpina kan du gå till tävlingskalendern och anmäla dig till den tävling du vill delta i. Prata med ansvarig tränare för din grupp om du har några frågor. Här hittar du tävlingskalendern:</Typography>
                    <Button
                        sx={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
                        variant="contained"
                        color="primary"
                        onClick={() => window.open('https://ta.skidor.com/EventCalendar.aspx?orgid=80', '_blank')}
                    >
                        Tävlingskalendern
                    </Button>
                </Item>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ marginTop: '10px' }}>
                <Item>
                    <Typography variant="h2">Hemmatävlingar</Typography>
                    <Typography variant="body1">Här kan du se tävlingar som vi i Sollefteå alpina klubb är med
                        och arrangera</Typography>
                    <CompetitionCalendarComponent/>
                </Item>
            </Grid>
        </Grid>
    );
}

export default DisplayCompetitionComponent;
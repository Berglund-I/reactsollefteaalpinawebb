import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
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

            <Grid item xs={12} sm={6}>
                <Item>
                    <Typography variant="h2">Tävlingskalendern</Typography>
                    <Typography variant="body1">Här kan du se och anmäla dig till kommande tävlingar</Typography>
                    <Link variant="body1" to="https://ta.skidor.com/EventCalendar.aspx?orgid=80">Klicka här för att gå till Tävlingskalendern</Link>
                </Item>
            </Grid>

            <Grid item xs={12} sm={6}>
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
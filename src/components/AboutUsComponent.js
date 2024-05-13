import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    flexGrow: 1,
    display: 'flex', // make this a flex container
    flexDirection: 'column', // stack the content vertically
    minHeight: '100%',
}));

function AboutUsComponent() {
    return (
        <Grid container spacing={3} >

            <Grid item xs={12} sm={6}>
                <Item>
                <Typography variant="h2">Information om Sollefteå alpina klubb</Typography>
                <Typography>Sollefteå alpina klubb är en alpin tävlingsklubb som drivs ideellt. Hemmabacken
                    Hallstaberget drivs av Sollefteå kommun.</Typography>
                </Item>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Item>
                <Typography variant="h2">Styrelsen i klubben</Typography>
                <Typography>
                    <dl>
                        <dt>Ordförande: Roger Svensson</dt>
                        <dt>Vice Ordförande: Mats Lidström</dt>
                        <dt>Kassör: Simon Duvemo</dt>
                        <dt>Ledamot: Marie Nauclér</dt>
                        <dt>Ledamot: Lotta Lundin</dt>
                        <dt>Ledamot: Magnus Berglund</dt>
                    </dl>
                </Typography>
                </Item>
            </Grid>

            <Grid item xs={12}>
                <Item>
                    <Typography variant="h2">Information om att vara medlem</Typography>
                    <Typography>Klicka på knappen för att gå vidare till att bli medlem:</Typography>
                    <Link to="/Bli medlem">Bli medlem</Link>
                    <Typography>För att vara med i Sollefteås Alpina skidklubb betalar medlemarna en årlig
                        medlemsavgift. Om du dessutom vill vara med om träna ska en träningsavgift också betalas. Mer
                        information om exakta priser finns neda. Kul att du vill vara med, vi ser fram emot att
                        ses!</Typography>
                    <Typography variant="h3">Medelmsavgifter:</Typography>
                    <ul>
                        <li><Typography>300:- Enskild person</Typography></li>
                        <li><Typography>350:- Hela familjen som bor på samma adress</Typography></li>
                    </ul>
                    <Typography variant="h3">Träningsavgifter:</Typography>
                    <ul>
                        <li><Typography>200:- U10</Typography></li>
                        <li><Typography>300:- U12</Typography></li>
                        <li><Typography>400:- U14 och äldre</Typography></li>
                    </ul>
                    <Typography variant="h3">Inbetalning:</Typography>
                    <Typography>Betala in medlemsavgift och eventuell träningsavgift till bankgirot nedan. I samband med
                        inbetalningen agne också namn och personnummer.</Typography>
                    <ul>
                        <li><Typography>Bankgiro: 5312-8369</Typography></li>
                    </ul>
                    <Typography>Dessutom måste du fylla i ett formulär som ny medlem, det hittar du på <Link to="/Bli medlem">här</Link>. Om du redan fyllt i formuläret och betalat avgifterna så är du nu medlem i klubben, kul! </Typography>
                    <Typography >Följ länken nedan för att se dina träningstider så ses vi i backen. Hör gärna av dig om du har frågor så vi kan hjälpa dig. </Typography>
                    <Link to="/Träning">Se vilken träningsgrupp du tillhör</Link>
                </Item>
            </Grid>
        </Grid>
    );
}

export default AboutUsComponent;
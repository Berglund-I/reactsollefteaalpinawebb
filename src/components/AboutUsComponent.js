import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    flexGrow: 1,
    display: 'flex', // make this a flex container
    flexDirection: 'column', // stack the content vertically
    minHeight: '100%',
}));

function AboutUsComponent() {
    return (
        <Grid container spacing={3} >

            <Grid item xs={12} sm={6} sx={{ marginTop: '10px' }}>
                <Item>
                <Typography variant="h2" paddingLeft="10px" paddingTop="10px" gutterBottom>Information om Sollefteå alpina klubb</Typography>
                <Typography variant="body1" paddingLeft="10px" >Sollefteå alpina klubb är en alpin tävlingsklubb som drivs ideellt. Hemmabacken
                    Hallstaberget drivs av Sollefteå kommun.</Typography>
                </Item>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ marginTop: '10px' }}>
                <Item>
                <Typography variant="h2" paddingLeft="10px" paddingTop="10px">Styrelsen i klubben</Typography>
                <Typography variant="body1" paddingLeft="10px" >
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

            <Grid item xs={12} sx={{ marginTop: '10px' }}>
                <Item>
                    <Typography variant="h2" paddingLeft="10px" paddingTop="10px" gutterBottom>Information om att vara medlem</Typography>
                    <Typography variant="body1" paddingLeft="10px">Klicka på knappen för att gå vidare till att bli medlem:</Typography>
                    <Button
                        component={Link}
                        to="/Bli%20medlem"
                        sx={{ width: '200px', marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}
                        variant="contained"
                        color="primary"
                    >
                        Bli medlem
                    </Button>
                    <Typography variant="body1" paddingLeft="10px">För att vara med i Sollefteås Alpina skidklubb betalar medlemarna en årlig
                        medlemsavgift. Om du dessutom vill vara med om träna ska en träningsavgift också betalas. Mer
                        information om exakta priser finns neda. Kul att du vill vara med, vi ser fram emot att
                        ses!</Typography>
                    <Typography variant="h3" paddingLeft="10px">Medelmsavgifter:</Typography>
                    <ul>
                        <li><Typography variant="body1">300:- Enskild person</Typography></li>
                        <li><Typography variant="body1">350:- Hela familjen som bor på samma adress</Typography></li>
                    </ul>
                    <Typography variant="h3" paddingLeft="10px">Träningsavgifter:</Typography>
                    <ul>
                        <li><Typography variant="body1">200:- U10</Typography></li>
                        <li><Typography variant="body1">300:- U12</Typography></li>
                        <li><Typography variant="body1">400:- U14 och äldre</Typography></li>
                    </ul>
                    <Typography variant="h3" paddingLeft="10px">Inbetalning:</Typography>
                    <Typography variant="body1" paddingLeft="10px">Betala in medlemsavgift och eventuell träningsavgift till bankgirot nedan. I samband med
                        inbetalningen agne också namn och personnummer.</Typography>
                    <ul>
                        <li><Typography variant="body1">Bankgiro: 5312-8369</Typography></li>
                    </ul>
                    <Typography variant="body1" paddingLeft="10px">Dessutom måste du fylla i ett formulär som ny medlem, det hittar du på <Link to="/Bli medlem">här</Link>. Om du redan fyllt i formuläret och betalat avgifterna så är du nu medlem i klubben, kul! </Typography>
                    <Typography variant="body1" paddingLeft="10px">Tryck på knappen nedan för att se dina träningstider så ses vi i backen. Hör gärna av dig om du har frågor så vi kan hjälpa dig. </Typography>
                    <Button
                        component={Link}
                        to="/Träning"
                        sx={{ width: '200px', marginLeft: '10px', marginTop: '10px' }}
                        variant="contained"
                        color="primary"
                    >
                        Träningstider
                    </Button>
                </Item>
            </Grid>
        </Grid>
    );
}

export default AboutUsComponent;
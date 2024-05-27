import React, {useState, useEffect} from 'react';
import StrapiAdminService from '../services/StrapiAdminService';
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

    const [boardInfo, setBoardInfo] = useState([]);
    const [sakInfo, setSakInfo] = useState([]);
    const [membershipPrice, setMembershipPrice] = useState([]);
    const [trainingPrice, setTrainingPrice] = useState([]);

    useEffect(() => {
        StrapiAdminService.getInformationAboutTheBoard()
            .then(response => {
                setBoardInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching board information', error);
            });
        StrapiAdminService.getInformationAboutTheSAK()
            .then(response => {
                setSakInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching SAK information', error);
            });
        StrapiAdminService.getInformationAboutMembershipPrice()
            .then(response => {
                setMembershipPrice(response.data);
            })
            .catch(error => {
                console.error('Error fetching membership price', error);
            });
        StrapiAdminService.getInformationAboutTrainingPrice()
            .then(response => {
                setTrainingPrice(response.data);
            })
            .catch(error => {
                console.error('Error fetching training price', error);
            });
    }, []);

    console.log(trainingPrice); // Check the fetched data

    if (!trainingPrice) {
        return <div>Loading...</div>; // Show a loading message if the data is not available
    }
    return (
        <Grid container spacing={3} >

            <Grid item xs={12} sm={6} sx={{ marginTop: '10px' }}>
                <Item>
                    <Typography variant="h2" paddingLeft="10px" paddingTop="10px" gutterBottom>Information om Sollefteå alpina klubb</Typography>
                    <Typography variant="body1" paddingLeft="10px" >
                        <dl>
                            {sakInfo.map((info, index) => (
                                <dt key={index}>{info.content}</dt>
                            ))}
                        </dl>
                    </Typography>
                </Item>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ marginTop: '10px' }}>
                <Item>
                    <Typography variant="h2" paddingLeft="10px" paddingTop="10px">Styrelsen i klubben</Typography>
                    <Typography variant="body1" paddingLeft="10px" >
                        <dl>
                            {boardInfo.map((info, index) => (
                                <dt key={index}>{info.role}: {info.name}</dt>
                            ))}
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
                    <Typography variant="h3" paddingLeft="10px" paddingTop="10px" gutterBottom>Medlemsavgifter:</Typography>
                    <Typography variant="body1" paddingLeft="10px">
                        <dl>
                            {membershipPrice.map((info, index) => (
                                <dt key={index}>{info.member}: {info.price}</dt>
                            ))}
                        </dl>
                    </Typography>
                    <Typography variant="h3" paddingLeft="10px" paddingTop="10px" gutterBottom>Träningsavgifter:</Typography>
                    <Typography variant="body1" paddingLeft="10px">
                        <dl>
                            {trainingPrice.map((info, index) => (
                                <dt key={index}>{info.trainingGroup}: {info.price}</dt>
                            ))}
                        </dl>
                    </Typography>
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
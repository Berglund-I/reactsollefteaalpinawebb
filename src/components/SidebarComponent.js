import React, {useState, useEffect} from 'react';
import StrapiAdminService from '../services/StrapiAdminService';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";

function SidebarComponent(){
    const [sponsorPhoto, setSponsorPhoto] = useState([]);
    useEffect(() => {
        StrapiAdminService.getSponsorPhoto()
            .then(response => {
                setSponsorPhoto(response.data);
            })
            .catch(error => {
                console.error('Error fetching sponsor photo', error);
            });
    }, []);

    return (
        <Grid container direction="column" spacing={2}>

            <Grid item>
                <Paper>
                    <Typography variant="h2">Våra samarbetspartners:</Typography>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        {sponsorPhoto.map((photo, index) => (
                            <img key={index} src={`http://localhost:1337${photo.photo.url}`} alt="Sponsor" />
                        ))}
                    </Box>
                </Paper>
            </Grid>

            <Grid item>
                <Paper>
                    <Typography variant="h2" >Följ oss gärna på våra sociala medier:</Typography>
                    <Link variant="body1" href="https://www.instagram.com/sollefteaalpina/" target="_blank" rel="noopener noreferrer" sx={{ margin: 2 }}>
                        <i className="bi bi-instagram">Sollefteaalpina</i>
                    </Link>
                    <Link variant="body1" href="https://www.facebook.com/profile.php?id=100063470472728&sk=photos" target="_blank"
                          rel="noopener noreferrer" sx={{ margin: 2 }}>
                        <i className="bi bi-facebook">Sollefteå alpina klubb</i>
                    </Link>
                </Paper>
            </Grid>

        </Grid>
    );
}

export default SidebarComponent;
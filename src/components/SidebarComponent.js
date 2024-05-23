import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";

function SidebarComponent() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/facebook-pictures')
            .then(response => response.json())
            .then(data => {
                setPhotos(data);
            });
    }, []);

    return (
        <Grid container direction="column" spacing={2}>

            <Grid item>
                <Paper>
                    <Typography variant="h2">Våra samarbetspartners</Typography>
                    <img src="IcaKvantum.jpg" alt="Sponsor 1, Ica kvantum Sollefteå alpina klubb"/>
                </Paper>
            </Grid>

            <Grid item>
                <Paper>
                    <Typography variant="h2" >Följ oss gärna på våra sociala medier:</Typography>
                    <Link variant="body1" href="https://www.instagram.com/sollefteaalpina/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram">Sollefteaalpina</i>
                    </Link>
                    <Link variant="body1" href="https://www.facebook.com/profile.php?id=100063470472728&sk=photos" target="_blank"
                          rel="noopener noreferrer">
                        <i className="bi bi-facebook">Sollefteå alpina klubb</i>
                    </Link>
                </Paper>
            </Grid>

            <Grid item>
                <Paper>
                    <Typography variant="h2">Våra senaste bilder</Typography>
                    {photos.map(photo => {
                        const url = `https://www.facebook.com/photo.php?fbid=${photo.id}/&set=pb.100063470472728.-2207520000&type=3`;
                        return (
                            <img key={photo.id} src={url} alt="Facebook photo"/>
                        );
                    })}
                </Paper>
            </Grid>

        </Grid>
    );
}

export default SidebarComponent;
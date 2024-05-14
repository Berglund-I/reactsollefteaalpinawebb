import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";

function SidebarComponent(){
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
                    <Typography variant="h3" >Följ oss gärna på våra sociala medier:</Typography>
                    <Link variant="body1" href="https://www.instagram.com/sollefteaalpina/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram">Sollefteaalpina</i>
                    </Link>
                    <Link variant="body1" href="https://www.facebook.com/profile.php?id=100063470472728&sk=photos" target="_blank"
                       rel="noopener noreferrer">
                        <i className="bi bi-facebook">Sollefteå alpina klubb</i>
                    </Link>
                </Paper>
            </Grid>

        </Grid>
    );
}

export default SidebarComponent;
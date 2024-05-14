import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

function SidebarComponent(){
    return (
        <Grid container direction="column" spacing={2}>

            <Grid item>
                <Paper>
                    <h2 className="sponsor-text">Våra samarbetspartners</h2>
                    <img src="IcaKvantum.jpg" alt="Sponsor 1, Ica kvantum Sollefteå alpina klubb"/>
                </Paper>
            </Grid>

            <Grid item>
                <Paper>
                    <h3 className="follow-us-text">Följ oss gärna på våra sociala medier:</h3>
                    <a href="https://www.instagram.com/sollefteaalpina/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram">Sollefteaalpina</i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100063470472728&sk=photos" target="_blank"
                       rel="noopener noreferrer">
                        <i className="bi bi-facebook">Sollefteå alpina klubb</i>
                    </a>
                </Paper>
            </Grid>

        </Grid>
    );
}

export default SidebarComponent;
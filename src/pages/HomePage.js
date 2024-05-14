import React from "react";
import FacebookComponent from "../components/FacebookComponent";
import SidebarComponent from "../components/SidebarComponent";
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';

function HomePage(){
    return (
        <div className="App">
            <h1>Välkommen till Sollefteå alpina</h1>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={9}>
                    <FacebookComponent/>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Hidden xsDown>
                        <SidebarComponent/>
                    </Hidden>
                </Grid>

            </Grid>
        </div>
    )
}

export default HomePage;
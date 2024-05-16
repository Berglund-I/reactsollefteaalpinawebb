import React from "react";
import FacebookComponent from "../components/FacebookComponent";
import SidebarComponent from "../components/SidebarComponent";
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from "@mui/material/Typography";

function HomePage(){
    return (
        <div className="App">
            <Typography variant="h1" paddingLeft="10px" paddingTop="20px">Välkommen till Sollefteå alpina</Typography>

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
import React from "react";
import ContactUsFormComponent from "../components/ContactUsFormComponent"
import CommonQuestionsComponent from "../components/CommonQuestionsComponent"
import Grid from '@mui/material/Grid';

function ContactUsPage(){
    return (
        <div className="App">
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <CommonQuestionsComponent/>
            </Grid>

            <Grid item xs={12} sm={6}>
                <ContactUsFormComponent/>
            </Grid>
            </Grid>
        </div>
    )
}

export default ContactUsPage;
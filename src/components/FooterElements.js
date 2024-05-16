import React from "react";
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function FooterElements(){
    return (
        <Box sx={{
            backgroundColor: 'background.paper',
            border: 'solid 1px black',
            marginTop: '10px'
        }}>

            <Grid container spacing={3} sx={{flexWrap: { xs: 'wrap', sm: 'nowrap' }, justifyContent: 'center'}}>

                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3, paddingTop: '30px', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                        <Box sx={{ pl: 3 }}>
                            <Link variant="body1" to="/Hem">
                                Hem
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Träning">
                                Träning
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Tävling">
                                Tävling
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Bli%20medlem">
                                Bli medlem
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Om%2föreningen">
                                Om föreningen
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Kontakta%20oss">
                                Kontakta oss
                            </Link>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Grid container alignItems="center" justifyContent="center" padding={{ xs: '10px', sm: '30px' }}>
                        <Typography variant="h3">
                            &copy; 2024 Sollefteå alpina klubb
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3, paddingTop: { xs: '0px', sm: '30px' }, paddingBottom: { xs: '30px' }, justifyContent: { xs: 'center', sm: 'flex-end' } }}>
                        <Box>
                            <Link variant="body1" href="https://www.instagram.com/sollefteaalpina/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram">Sollefteaalpina</i>
                            </Link>
                        </Box>
                        <Box sx={{ pr: 3 }}>
                            <Link variant="body1" href="https://www.facebook.com/profile.php?id=100063470472728&sk=photos" target="_blank"
                                  rel="noopener noreferrer">
                                <i className="bi bi-facebook">Sollefteå alpina klubb</i>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FooterElements;
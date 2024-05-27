import React from "react";
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function FooterElements(){
    return (
        <Box sx={{
            backgroundColor: 'primary.main', // Use primary color from theme
            color: 'white', // Use white color for text
            border: 'solid 1px #044899',
            marginTop: '10px'
        }}>

            <Grid container spacing={3} sx={{flexWrap: { xs: 'wrap', sm: 'nowrap' }, justifyContent: 'center'}}>

                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3, paddingTop: '30px', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                        <Box sx={{ pl: 3 }}>
                            <Link variant="body1" to="/Hem" style={{ color: 'white' }}>
                                Hem
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Träning" style={{ color: 'white' }}>
                                    Träning
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Tävling" style={{ color: 'white' }}>
                                    Tävling
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Bli%20medlem" style={{ color: 'white' }}>
                                    Bli medlem
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Om%20föreningen" style={{ color: 'white' }}>
                                    Om föreningen
                            </Link>
                        </Box>
                        <Box>
                            <Link variant="body1" to="/Kontakta%20oss" style={{ color: 'white' }}>
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
                            <a href="https://www.instagram.com/sollefteaalpina/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                <i className="bi bi-instagram">Sollefteaalpina</i>
                            </a>
                        </Box>
                        <Box sx={{ pr: 3 }}>
                            <a href="https://www.facebook.com/profile.php?id=100063470472728&sk=photos" target="_blank"
                               rel="noopener noreferrer" style={{ color: 'white' }}>
                                <i className="bi bi-facebook">Sollefteå alpina klubb</i>
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingTop: { xs: '0px', sm: '50px' }, paddingBottom: { xs: '10px' }, justifyContent: { xs: 'center'} }}>
                        <Typography variant="body1">
                            Är du admin för sidan?
                        </Typography>
                        <Link variant="contained" color="primary" href="http://localhost:1337/admin/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                            Logga in här
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FooterElements;
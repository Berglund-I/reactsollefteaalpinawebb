import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function HeaderElements(){
    return (
        <Box className="App-header" display="flex" alignItems="center" sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <Link to={"/Hem"}>
                <img src={process.env.PUBLIC_URL + 'logosollefteaalpinaklubb.png'} alt="Sollefteå alpinas logga och länk till hem" style={{ width: '250px', height: 'auto' }}/>
            </Link>
            <Typography variant="h1" sx={{ display: { xs: 'none', sm: 'block' } }}>
                SOLLEFTEÅ ALPINA SKIDKLUBB
            </Typography>
        </Box>
    );
}

export default HeaderElements;

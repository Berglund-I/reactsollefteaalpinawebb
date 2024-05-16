import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function HeaderElements(){
    return (
            <Box className="App-header" display="flex" alignItems="center">
                <Link href={"Hem"}>
                    <img src={process.env.PUBLIC_URL + 'logosollefteaalpinaklubb.png'}alt="logo" style={{ width: '250px', height: 'auto' }}/>
                </Link>
                <Typography variant="h1">SOLLEFTEÅ ALPINA SKIDKLUBB</Typography>
            </Box>
    );
}

export default HeaderElements;

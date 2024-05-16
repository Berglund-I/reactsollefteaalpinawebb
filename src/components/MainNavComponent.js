import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const pages = ['Hem', 'Träning', 'Tävling', 'Bli medlem', 'Om föreningen', 'Kontakta oss'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    sx={{ display: { xs: 'block', md: 'none', color: 'white' } }}
                >
                    <MenuIcon/>
                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    {pages.map((page) => (
                        <Link to={`/${page}`} key={page} style={{textDecoration: 'none'}}>
                            <MenuItem onClick={handleCloseNavMenu} sx={{ color: 'primary.main' }}>
                                {page}
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>

                {pages.map((page) => (
                    <Box sx={{ display: { xs: 'none', md: 'block'}, flexGrow: 1 }} key={page}>
                        <Link to={`/${page}`} style={{textDecoration: 'none'}}>
                            <Typography variant="body1" sx={{ color: 'white'}}>
                                {page}
                            </Typography>
                        </Link>
                    </Box>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;
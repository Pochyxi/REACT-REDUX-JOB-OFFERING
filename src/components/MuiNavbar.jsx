import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MuiNavbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const favourites = useSelector((state) => state.jobs.content)
    const location = useLocation()


    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="button"
                        href=""
                        onClick={() => {
                            navigate('/');
                        }}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    >
                        Remote Jobs Search
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem
                                className={location.pathname === '/' ? 'text-primary' : ''}

                                onClick={(element) => {
                                    handleCloseNavMenu(element)
                                    navigate('/')

                                }}>
                                <Typography textAlign="center">HOME</Typography>
                            </MenuItem>
                            <MenuItem
                                className={location.pathname === '/favourites' ? 'text-primary' : ''}

                                onClick={(element) => {
                                    handleCloseNavMenu(element)
                                    navigate('/favourites')

                                }}>
                                <Typography textAlign="center">
                                    <Badge badgeContent={favourites.length} color="error">
                                        FAVOURITES
                                    </Badge>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="button"
                        href=""
                        onClick={() => {
                            navigate('/')
                        }}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    >
                        Remote Jobs Search
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>

                        <Button
                            className={location.pathname === '/' ? 'text-white' : 'text-dark'}
                            onClick={() => {
                                navigate('/')
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                        <Button
                            className={location.pathname === '/favourites' ? 'text-white' : 'text-dark'}
                            onClick={() => {
                                navigate('/favourites')
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Badge badgeContent={favourites.length} color="error">
                                favourites
                            </Badge>
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MuiNavbar;

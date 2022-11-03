/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import IdfrogLogo from '../../../assets/images/logo-mini.png';

function ResponsiveAppBar({ userDetails, isLogged }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const buttonPrimaryStyles = {
    fontSize: 14,
    backgroundColor: '#ffffff',
    color: '#5de4d5',
    fontWeight: 700,
    margin: '4px',
    textTransform: 'none',
    borderRadius: '50px',
    padding: '4px 10px',
    '&:hover': {
      color: '#ffffff',
      border: '2px solid #ffffff',
    },
  };

  const buttonSecondaryStyles = {
    fontSize: 14,
    backgroundColor: '#5de4d5',
    background: ' rgba(0, 0, 0, 0.2)',
    color: '#2D3A4D',
    fontWeight: 700,
    margin: '4px',
    textTransform: 'none',
    borderRadius: '50px',
    padding: '4px 10px',
    '&:hover': {
      color: '#2D3A4D',
      border: '2px solid #2D3A4D',
    },
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={IdfrogLogo}
            alt="Mini Logo Idfrog"
            style={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              padding: '0.4em',
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="with"
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color="primary.dark">
                  <Link to="/project/login/">Lancer mon projet</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color="primary.dark">
                  <Link to="/project/list/">Liste des Projets</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography color="primary.dark">
              <Button
                href="/project/login/"
                onClick={handleCloseNavMenu}
                sx={{
                  pt: 4,
                  pb: 4,
                  mx: 1,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: '#5de4d5',
                    background: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '0px',
                  },
                }}
              >
                Lancer mon dprojet
              </Button>
            </Typography>
            <Button
              href="/project/list/"
              onClick={handleCloseNavMenu}
              sx={{
                pt: 4,
                pb: 4,
                color: 'white',
                display: 'block',
                '&:hover': {
                  backgroundColor: '#5de4d5',
                  background: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '0px',
                },
              }}
            >
              Liste des Projets
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <div className="navigtionHeader-login">
              {isLogged ? (
                <>
                  <Link to={`/profile/${userDetails.id}`}>
                    <div className="navigtionHeader-login-user">
                      <AccountCircleRoundedIcon />
                      <p>{userDetails.name}</p>
                    </div>
                  </Link>
                  <Button
                    href={`/profile/${userDetails.id}/logout`}
                    size="small"
                    sx={buttonSecondaryStyles}
                  >
                    Se déconnecter
                  </Button>
                </>
              ) : (
                <>
                  <Button href="/signup" size="small" sx={buttonPrimaryStyles}>
                    S&apos;inscrire
                  </Button>

                  <Button
                    href="/signin"
                    size="small"
                    sx={buttonSecondaryStyles}
                  >
                    Se connecter
                  </Button>
                </>
              )}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import IdfrogLogo from '../../../assets/images/logo-mini.png';

// Material UI
import {
  Avatar,
  Typography,
  MenuItem,
  Button,
  Grid,
  Container,
  Menu,
  IconButton,
  Toolbar,
  AppBar,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

// CSS
import { navHeaderStyles } from './styles';

function ResponsiveAppBar() {
  const user = { name: 'IdFrog', id: 24 };
  const isLogged = false;

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Link to="">
            <img
              src={IdfrogLogo}
              alt="Mini Logo Idfrog"
              style={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                padding: '0.4em',
              }}
            />
          </Link>
          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
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
                  <Link to="subscribe">Lancer mon projet</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color="primary.dark">
                  <Link to="projects">Liste des Projets</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {isLogged ? (
              <Link to="profile">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={navHeaderStyles.btnPostProject}
                >
                  Mon Profile
                </Button>
              </Link>
            ) : (
              <Link to="subscribe">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={navHeaderStyles.btnPostProject}
                >
                  Lancer mon projet
                </Button>
              </Link>
            )}
            <Link to="projects">
              <Button
                onClick={handleCloseNavMenu}
                sx={navHeaderStyles.btnListProject}
              >
                Liste des Projets
              </Button>
            </Link>
          </Box>

          <Box>
            <div>
              {isLogged ? (
                <Grid container>
                  <Grid item xs={5}>
                    <Link to={`profile/${user.id}`}>
                      <div style={navHeaderStyles.loginUser}>
                        <Avatar
                          sx={{ bgcolor: '#2D3A4D' }}
                          alt="IdFrog"
                          src="/broken-image.jpg"
                        >
                          IF
                        </Avatar>
                        <p style={navHeaderStyles.p}>{user.name}</p>
                      </div>
                    </Link>
                  </Grid>
                  <Grid item xs={7}>
                    <Link to={`profile/${user.id}/logout`}>
                      <Button size="small" sx={navHeaderStyles.btnSecondary}>
                        Se déconnecter
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              ) : (
                <>
                  <Link to="subscribe">
                    <Button size="small" sx={navHeaderStyles.btnPrimary}>
                      inscription
                    </Button>
                  </Link>
                  <Link to="login">
                    <Button size="small" sx={navHeaderStyles.btnSecondary}>
                      connexion
                    </Button>
                  </Link>
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

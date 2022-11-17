/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Components
import SideBarItems from './SideBarItems';
import ButtonProject from './ButtonProject';
// Material UI
import { Button, Drawer, Box, Divider } from '@mui/material';

import IdfrogLogo from '../../../assets/images/logo-mini.png';
import FrogMenu from '../../../assets/images/frogmenu.png';
// CSS
import './navigationSideBarStyles.scss';

import palette from '../../../assets/styles/_vars.scss';
import { navSideBarStyles } from './styles';

function NavigationSideBar() {
  // Open toogle mobile
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const list = () => (
    <Box sx={navSideBarStyles.drawerMobileBox}>
      <Link to="/">
        <img src={IdfrogLogo} alt="Mini Logo Idfrog" />
      </Link>
      <Box
        role="presentation"
        onClick={handleDrawerToggle}
        onKeyDown={handleDrawerToggle}
      >
        <ButtonProject />
        <Divider />
      </Box>
      <SideBarItems />
    </Box>
  );

  return (
    <>
      <Box sx={navSideBarStyles.frogMenu}>
        <Button onClick={handleDrawerToggle}>
          <img src={FrogMenu} alt="MenuIdfrog" />
        </Button>
      </Box>

      <div className="navigationSideBar">
        <ButtonProject />
        <SideBarItems />
      </div>

      <div className="drawerMobile">
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              variant="temporary"
              anchor={anchor}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  backgroundColor: palette.primary,
                  border: 'none',
                },
              }}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

NavigationSideBar.propTypes = {};

NavigationSideBar.defaultProps = {};

export default React.memo(NavigationSideBar);

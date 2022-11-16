/* eslint-disable react/prop-types */
import React from 'react';

// components
import DropDownProjectList from './DropDownProjectList';
import DropDownContributionList from './DropDownContributionList';

// import PropTypes from "prop-types";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import WorkIcon from '@mui/icons-material/Work';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';
import IdfrogLogo from '../../../assets/images/logo-mini.png';
import { Link } from 'react-router-dom';

import './navigationSideBarStyles.scss';

function NavigationSideBar({ projectList, contributionList, userDetails }) {
  return (
    <div className="navigationSideBar">
      <div className="navigationSideBar-Top">
        <Link to="/">
          <img src={IdfrogLogo} alt="Mini Logo IdFrog" />
        </Link>
        <AccountCircleRoundedIcon sx={{ fontSize: 40, color: '#30394e' }} />
      </div>

      <div className="navigationSideBar-settings">
        <p className="navigationSideBar-settings-pseudo">{userDetails.name}</p>
        <div className="navigationSideBar-settings-icons">
          <Link to="/profile">
            <SettingsRoundedIcon sx={{ marginRight: '1rem' }} />
          </Link>
          <Link to={`/profile/${userDetails.id}/logout`}>
            <PowerSettingsNewRoundedIcon />
          </Link>
        </div>
      </div>

      <Button
        color="secondary"
        className="navigationSideBar-button"
        variant="text"
        fullWidth={true}
        sx={{
          backgroundColor: '#ffffff!important',
          justifyContent: 'space-between',
          margin: '0.5rem 0',
          padding: '0.5rem 20px ',
        }}
        startIcon={<WorkIcon color="secondary" />}
        endIcon={<PlayArrowIcon color="secondary" />}
      >
        Nouveau Projet
      </Button>

      <DropDownProjectList projectList={projectList} />
      <DropDownContributionList contributionList={contributionList} />
    </div>
  );
}

NavigationSideBar.propTypes = {};

NavigationSideBar.defaultProps = {};

export default React.memo(NavigationSideBar);

/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';


// Components
import DropDownProjectList from './DropDownProjectList';
import DropDownContributionList from './DropDownContributionList';

// Material UI
import { Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// CSS
import './navigationSideBarStyles.scss';

function NavigationSideBar({projectList, contributionList}) {


  return (
    <div className="navigationSideBar">
      <Link to={`/profile/postproject`}>
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
      </Link>

      <DropDownProjectList projectList={projectList} />
      <DropDownContributionList contributionList={contributionList} />
    </div>
  );
}

NavigationSideBar.propTypes = {};

NavigationSideBar.defaultProps = {};

export default React.memo(NavigationSideBar);

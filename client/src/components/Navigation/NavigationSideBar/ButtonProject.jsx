import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Material UI
import { Button, List } from '@mui/material';

import WorkIcon from '@mui/icons-material/Work';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function ButtonProject() {
  return (
    <>
      <List>
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
      </List>
    </>
  );
}
ButtonProject.propTypes = {};

ButtonProject.defaultProps = {};

export default React.memo(ButtonProject);

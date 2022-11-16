/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

//Mui List
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

//icons
import AppsIcon from '@mui/icons-material/Apps';

function DropDownProjectList({ projectList }) {
  const [openProject, setOpenProject] = useState(false);

  const handleClickProject = () => {
    setOpenProject(!openProject);
  };

  return (
    <List // liste projets
      sx={{ width: '100%', justifyContent: 'space-between' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        sx={{
          backgroundColor: '#ffffff!important',
        }}
        onClick={handleClickProject}
      >
        <ListItemIcon color="secondary">
          <AppsIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Liste des projets" />
        {openProject ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProject} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ backgroundColor: '#ffffff80' }}
        >
          {projectList?.map((project, index) => (
            <ListItemButton key={index} sx={{ pl: 4 }}>
              <ListItemText
                sx={{ textAlign: 'center' }}
                primary={project.name}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
DropDownProjectList.propTypes = {};

DropDownProjectList.defaultProps = {};

export default React.memo(DropDownProjectList);

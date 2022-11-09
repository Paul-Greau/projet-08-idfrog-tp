/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from "prop-types";

// Material UI
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function DropDownContributionList({ contributionList }) {
  const [openContribution, setOpenContribution] = useState(false);

  const handleClickContribution = () => {
    setOpenContribution(!openContribution);
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
        onClick={handleClickContribution}
      >
        <ListItemIcon color="secondary">
          <PeopleAltIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Liste des projets" />
        {openContribution ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openContribution} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ backgroundColor: '#ffffff80' }}
        >
          {contributionList?.map((project, index) => (
            <Link key={index} to={`contribut`}>
              <ListItemButton sx={{ pl: 4 }}>
                <StarIcon color="secondary" />
                <ListItemText
                  sx={{ textAlign: 'center' }}
                  primary={project.name}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
DropDownContributionList.propTypes = {};

DropDownContributionList.defaultProps = {};

export default React.memo(DropDownContributionList);

/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
// import PropTypes from "prop-types";

// Mui List
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// Mui Icons
import StarIcon from '@mui/icons-material/Star';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function DropDownContributionList({ contributionList }) {
  const [openContribution, setOpenContribution] = useState(false);

  const handleClickContribution = () => {
    setOpenContribution(!openContribution);
  };

  return (
    <List // liste investissements
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
        <ListItemText primary="Liste des contributions" color="secondary" />
        {openContribution ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openContribution} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ backgroundColor: '#ffffff80' }}
        >
          {contributionList?.map((contribution, index) => (
            <ListItemButton key={index} sx={{ pl: 4 }}>
              <StarIcon color="secondary" />
              <ListItemText
                sx={{ textAlign: 'center' }}
                primary={contribution.name}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
DropDownContributionList.propTypes = {};

DropDownContributionList.defaultProps = {};

export default React.memo(DropDownContributionList);

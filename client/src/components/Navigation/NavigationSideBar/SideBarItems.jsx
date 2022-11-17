/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getProfile } from '../../../services/profileService';

// Components
import DropDownProjectList from './DropDownProjectList';
import DropDownContributionList from './DropDownContributionList';

// Material UI
import { Box, List } from '@mui/material';

// CSS
import './navigationSideBarStyles.scss';
import { useRecoilValue } from 'recoil';
import { profileConnexionstate } from '../../../atomes/profileAtomes';

function SideBarItems() {
  const { token } = useRecoilValue(profileConnexionstate);
  const [projectList, setProjectList] = useState([]);
  const [contributionList, setcontributionList] = useState([]);

  const [serverError, setServerError] = useState('');
  const [showError, setShowError] = useState(false);

  const FetchProfileData = async (token) => {
    let response = await getProfile(token);
    console.log(('getprofile response', response));
    if (response.status !== 200) {
      setServerError({
        status: response.status,
        message: response.data.message,
      });
      setShowError(true);
      return;
    }
    setProjectList(response.data.projects);
    setcontributionList(response.data.contributions);
  };

  // Open toogle Drawer
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    FetchProfileData(token);
  }, []);

  return (
    <div>
      <Box
        role="presentation"
        onClick={toggleDrawer(true)}
        onKeyDown={toggleDrawer}
      >
        <List>
          <DropDownProjectList projectList={projectList} />
        </List>
        <List>
          <DropDownContributionList contributionList={contributionList} />
        </List>
      </Box>
    </div>
  );
}

SideBarItems.propTypes = {};

SideBarItems.defaultProps = {};

export default React.memo(SideBarItems);

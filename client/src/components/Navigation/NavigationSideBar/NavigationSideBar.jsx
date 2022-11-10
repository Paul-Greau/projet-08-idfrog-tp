/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getProfileById } from '../../../services/projects';
import { profileConnexionstate } from '../../../atomes/profileAtomes';

// Components
import DropDownProjectList from './DropDownProjectList';
import DropDownContributionList from './DropDownContributionList';

// Material UI
import { Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// CSS
import './navigationSideBarStyles.scss';
import { useRecoilValue } from 'recoil';

function NavigationSideBar() {

const {id} = useRecoilValue(profileConnexionstate)
const [profileInfos, setProfileInfos] = useState({})

const fetchProfileInfos = async (id) =>{

 const response = await getProfileById(id)
 console.log("fetchProfileInfos", response);
}

  /* const projectList = [
    { name: 'Projet1' },
    { name: 'Projet2' },
    { name: 'Projet3' },
  ];
  
  const contributionList = [
    { name: 'Contribution1' },
    { name: 'Contribution2' },
    { name: 'Contribution3' },
  ];
  */
useEffect(() => {

  fetchProfileInfos(id)

},[id])


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

      <DropDownProjectList projectList={profileInfos.projects} />
      <DropDownContributionList contributionList={profileInfos.contributions} />
    </div>
  );
}

NavigationSideBar.propTypes = {};

NavigationSideBar.defaultProps = {};

export default React.memo(NavigationSideBar);

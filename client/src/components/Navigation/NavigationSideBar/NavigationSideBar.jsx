/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getProfile } from '../../../services/profileService';

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
import { profileConnexionstate } from '../../../atomes/profileAtomes';

function NavigationSideBar() {

  const {token} = useRecoilValue(profileConnexionstate)
  const [projectList, setProjectList] = useState([]);
  const [contributionList, setcontributionList] = useState([]);
  
  const [serverError, setServerError] = useState('')
  const [showError, setShowError] = useState(false)

  const FetchProfileData = async (token) => {
    let response = await getProfile(token)
    console.log(('getprofile response', response)); 
     if(response.status!==200){
      setServerError({
          status : response.status,
          message: response.data.message
        })
        setShowError(true)
        return      
      }
      setProjectList(response.data.projects);
      setcontributionList(response.data.contributions)

      }

  useEffect(() => {

    FetchProfileData(token)

  },[]);


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

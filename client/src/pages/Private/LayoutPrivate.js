import React, {useState, useEffect}  from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { profileConnexionstate, profileDetailState } from '../../atomes/profileAtomes';
import { getProfile } from '../../services/profileService';


// Componentes
import NavigationSideBar from '../../components/Navigation/NavigationSideBar/NavigationSideBar';

// CSS
import './layoutPrivateStyles.scss'

const LayoutPrivate = () => {

    const {token} = useRecoilValue(profileConnexionstate)
    const [projectList, setProjectList] = useState([]);
    const [contributionList, setcontributionList] = useState([]);
    const [ProfileDetail, setProfileDetail] = useRecoilState(profileDetailState)

    console.log("ProfileDetail layout private", ProfileDetail);
    // eslint-disable-next-line no-unused-vars
    const [serverError, setServerError] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [showError, setShowError] = useState(false)

  const FetchProfileData = async (token) => {
    let response = await getProfile(token)
    console.log('getprofile response', response); 

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
      setProfileDetail(response.data)
     }

  useEffect(() => {

    FetchProfileData(token)

  },[]);

    return (       
        <div className="layoutPrivate">
          {ProfileDetail.id && 
            <div className="profile" style={{display:'flex'}}>
                <NavigationSideBar 
                projectList={projectList}
                contributionList={contributionList}
                className="sideBar" />
             <div className="profile-container">
              <Outlet />
            </div>
          </div>
          }
            
        </div>
    );
};

export default LayoutPrivate;
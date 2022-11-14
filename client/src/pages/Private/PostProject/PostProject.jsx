import React from 'react';
// import PropTypes from 'prop-types';
import { profileConnexionstate } from '../../../atomes/profileAtomes';
import { profileDetailState } from '../../../atomes/profileAtomes';
import { useRecoilValue } from 'recoil';

// Componenets
import PostProjectForm from '../../../components/UI/forms/PostProjectForm/PostProjectForm';

// CSS
import './postProjectStyles.scss';


function PostProject() {

const {token} = useRecoilValue(profileConnexionstate)
const profileDetail = useRecoilValue(profileDetailState);

console.log('PostProject', profileDetail);
  return (
    <div className="post-project-container">
      <Typography variant="h1" sx={{ fontSize: '2em', mb: 2 }}>
        Quel est votre projet ?
      </Typography>
      {profileDetail.id &&
      <PostProjectForm
      token={token}
      profileStatus={profileDetail.person?.status ?? profileDetail.society?.status}
      />
      }      
    </div>
  );
}
PostProject.propTypes = {};

PostProject.defaultProps = {};

export default React.memo(PostProject);

import React from 'react';
// import PropTypes from 'prop-types';
import { isLoadingState, profileConnexionstate } from '../../../atomes/profileAtomes';
import { profileDetailState } from '../../../atomes/profileAtomes';
import { useRecoilValue } from 'recoil';

// Componenets
import PostProjectForm from '../../../components/UI/forms/PostProjectForm/PostProjectForm';
// Materail UI


// CSS
import './postProjectStyles.scss';
import PostProjectPlaceholder from '../../../components/UI/Placeholder/PostProjectPlaceholder';

function PostProject() {
  const { token } = useRecoilValue(profileConnexionstate);
  const profileDetail = useRecoilValue(profileDetailState);
  const isLoading = useRecoilValue(isLoadingState)
  console.log("PostProject is loading", isLoading, isLoadingState, token);

  return (
    <>
      {!isLoading ? (
        <div className="post-project-container">
          {profileDetail.id && (
            <PostProjectForm
              token={token}
              profileStatus={
                profileDetail.person?.status ?? profileDetail.society?.status
              }
            />
          )}
        </div>
      ) : (
        <div className="post-project-container">
          <PostProjectPlaceholder />
        </div>
      )}
    </>

  );
}
PostProject.propTypes = {};

PostProject.defaultProps = {};

export default React.memo(PostProject);

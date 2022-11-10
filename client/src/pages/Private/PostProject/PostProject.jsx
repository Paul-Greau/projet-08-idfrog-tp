import React from 'react';
// import PropTypes from 'prop-types';

// Componenets
import PostProjectForm from '../../../components/UI/forms/PostProjectForm/PostProjectForm';
// Materail UI

// CSS
import './postProjectStyles.scss';

function PostProject() {
  return (
    <div className="post-project-container">
      <PostProjectForm />
    </div>
  );
}
PostProject.propTypes = {};

PostProject.defaultProps = {};

export default React.memo(PostProject);

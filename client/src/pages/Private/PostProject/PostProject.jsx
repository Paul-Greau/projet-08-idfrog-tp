import React from 'react';
// import PropTypes from 'prop-types';

// Componenets
import PostProjectForm from '../../../components/UI/forms/PostProjectForm/PostProjectForm';
// Materail UI
import { Typography } from '@mui/material';
// CSS
import './postProjectStyles.scss';

function PostProject() {
  return (
    <div className="post-project-container">
      <Typography variant="h1" sx={{ fontSize: '2em', mb: 2 }}>
        Quel est votre projet ?
      </Typography>
      <PostProjectForm />
    </div>
  );
}
PostProject.propTypes = {};

PostProject.defaultProps = {};

export default React.memo(PostProject);

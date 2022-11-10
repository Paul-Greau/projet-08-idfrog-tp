import React from 'react';
import ProjectDetails from '../../../components/ProjectDetails/ProjectDetails';
// import PropTypes from 'prop-types';

// CSS
import './projectStyles.scss';

function Project() {
  return (
    <div className="project-container">
      <ProjectDetails />
    </div>
  );
}
Project.propTypes = {};

Project.defaultProps = {};

export default React.memo(Project);

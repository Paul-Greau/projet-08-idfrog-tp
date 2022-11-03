import React from 'react';
// import PropTypes from "prop-types";
import MainHeader from './NavigationHeader/NavigationHeader';
import SidebarHeader from './NavigationSideBar/NavigationSideBar';

import { Routes, Route } from 'react-router-dom';

function Navigation() {
  const project = [
    { name: 'Projet1' },
    { name: 'Projet2' },
    { name: 'Projet3' },
  ];
  const contribution = [
    { name: 'Contribution1' },
    { name: 'Contribution2' },
    { name: 'Contribution3' },
  ];
  const user = { name: 'Michel', id: 24 };

  return (
    <Routes>
      <Route path="/" element={<MainHeader />} />
      <Route
        path="/profile"
        element={
          <SidebarHeader
            projectList={project}
            contributionList={contribution}
            userDetails={user}
          />
        }
      />
    </Routes>
  );
}

// HeaderHandle.PropTypes = {};

// HeaderHandle.defaultProps = {};

export default React.memo(Navigation);

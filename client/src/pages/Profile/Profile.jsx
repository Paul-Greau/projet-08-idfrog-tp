import React from 'react';
import PropTypes from 'prop-types';
import NavigationSideBar from '../../components/Navigation/NavigationSideBar/NavigationSideBar';
import Footer from '../../components/Footer/Footer';
import './profileStyles.scss';

function Profile() {
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
    <>
      <NavigationSideBar
        projectList={project}
        contributionList={contribution}
        userDetails={user}
      />

      <Footer />
    </>
  );
}
Profile.propTypes = {};

Profile.defaultProps = {};

export default React.memo(Profile);

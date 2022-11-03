import React from 'react';
import ProjectCardList from '../../components/ProjectCardList/ProjectCardList';
import Footer from '../../components/Footer/Footer';
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader';

// import PropTypes from 'prop-types';

function Home() {
  return (
    <>
      <NavigationHeader />
      <ProjectCardList />
      <Footer />
    </>
  );
}
Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);

import React from 'react';
import ProjectCardList from '../../components/ProjectCardList/ProjectCardList';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

// import PropTypes from 'prop-types';

import './homeStyles.scss';
import Head from '../../components/Head/Head';
import TopFooter from '../../components/TopFooter/TopFooter';

function Home() {
  return (
    <>
      <Navigation />
      <Head />
      <ProjectCardList />
      <TopFooter />
      <Footer />
    </>
  );
}
Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);

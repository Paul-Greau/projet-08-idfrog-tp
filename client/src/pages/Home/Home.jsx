import React from 'react';
import ProjectCardList from '../../components/ProjectCardList/ProjectCardList';
import Footer from '../../components/Footer/Footer';
// import Navigation from '../../components/Navigation/Navigation';
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader';
import { Box } from '@mui/material';

// import PropTypes from 'prop-types';

import './homeStyles.scss';
import Head from '../../components/Head/Head';
import TopFooter from '../../components/TopFooter/TopFooter';

function Home() {
  return (
    <>
      <NavigationHeader />
      <Head />
      <Box sx={{ backgroundColor: '#5de4d5' }}>
        <ProjectCardList />
      </Box>
      <TopFooter />
      <Footer />
    </>
  );
}
Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);

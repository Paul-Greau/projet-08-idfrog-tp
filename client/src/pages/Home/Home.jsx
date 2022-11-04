import React, { useEffect } from 'react';
import ProjectCardList from '../../components/ProjectCardList/ProjectCardList';
import Footer from '../../components/Footer/Footer';
// import Navigation from '../../components/Navigation/Navigation';
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader';
import { Box } from '@mui/material';

import { getProjectsList } from '../../services/projects';

// import PropTypes from 'prop-types';

import './homeStyles.scss';
import Head from '../../components/Head/Head';
import TopFooter from '../../components/TopFooter/TopFooter';

import { useState } from 'react';

function Home() {

const [result, setResult] = useState(null)
const FetchData = async () => {
  try{
   const response = await getProjectsList();
   console.log(response.data);
   setResult(response.data);
  }
  catch (error) {
    console.log(error);
  }
};

useEffect(
  () => {
    // mon effet s'executera sur le mount
    FetchData(); // fetchData est asynchrone je l'appele simplement sans attendre la suite
  },
  [], // tableau de dependances vide => effet sur le mount
);

  return (
    <>
      <NavigationHeader />
      <Head />
      <Box sx={{ backgroundColor: '#5de4d5' }}>
        <ProjectCardList
        result={result}
        />
      </Box>
      <TopFooter />
      <Footer />
    </>
  );
}
// Home.propTypes = {};

// Home.defaultProps = {};

export default React.memo(Home);

import React, { useEffect } from 'react';
import ProjectCardList from '../../components/ProjectCardList/ProjectCardList';
import Footer from '../../components/Footer/Footer';
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader';
import { useState } from 'react';
import { getProjectsList } from '../../services/projects';

// import PropTypes from 'prop-types';

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
      <ProjectCardList 
      result={result}
      />
      <Footer />
    </>
  );
}
Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);

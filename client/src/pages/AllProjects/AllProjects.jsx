import React, { useEffect, useState } from 'react';
import ProjectCardList from '../../components/ProjectCardList/ProjectCardList';
import Footer from '../../components/Footer/Footer';
import NavigationHeader from '../../components/Navigation/NavigationHeader/NavigationHeader';
import { getProjectsList } from '../../services/projects';
import  Pagination  from '@mui/material/Pagination';
import  Container  from '@mui/material/Container';

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
              <Container component="section" maxWidth="lg" sx={{display: "flex", justifyContent: "center", paddingBottom: "20px"}}>
        <Pagination count={10} size="large" variant="outlined" sx={{color: "#fff"}}/>
        </Container>
      <Footer />
    </>
  );
}
Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);

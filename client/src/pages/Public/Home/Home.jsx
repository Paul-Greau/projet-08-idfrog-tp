import React, { useState, useEffect } from 'react';

// import PropTypes from 'prop-types';

//  Services
import { getProjectsList } from '../../../services/projects';
// Components
import ProjectCardList from '../../../components/ProjectCardList/ProjectCardList';
import Head from '../../../components/Head/Head';
import TopFooter from '../../../components/TopFooter/TopFooter';

// Material UI
import { Container, Box, Pagination } from '@mui/material';

// CSS
import './homeStyles.scss';

function Home() {
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const handleChange = (event, value) => {
    event.preventDefault();
    setCurrentPage(value);
    setCardsPerPage;
  };

  const nbPage = Math.ceil(result.length / cardsPerPage);

  useEffect(
    () => {
      const FetchData = async () => {
        try {
          const response = await getProjectsList();
          console.log(response.data);
          setResult(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      // mon effet s'executera sur le mount
      FetchData(); // fetchData est asynchrone je l'appele simplement sans attendre la suite
    },
    [] // tableau de dependances vide => effet sur le mount
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = result.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <Head />
      <Box className="allCards">
        <ProjectCardList result={currentCards} />
        <Container
          component="section"
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Pagination
            count={nbPage}
            page={currentPage}
            onChange={handleChange}
            sx={{ p: 2 }}
          />
        </Container>
      </Box>
      <TopFooter />
    </>
  );
}
Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);

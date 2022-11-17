import React, { useState, useEffect } from "react";

// import PropTypes from 'prop-types';

//  Services
import { getProjectsList } from "../../../services/projectService";
// Components
import ProjectCardList from "../../../components/ProjectCardList/ProjectCardList";
import Head from "../../../components/Head/Head";
import TopFooter from "../../../components/TopFooter/TopFooter";

// Material UI
<<<<<<< HEAD
import { Container, Box } from '@mui/material';
=======
import { Container, Box, Pagination } from "@mui/material";
>>>>>>> origin/fix-gitflow-process

// CSS
import "./homeStyles.scss";

function Home() {
  const [result, setResult] = useState([]);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState([false]);

  const FetchData = async () => {
    try {
      setIsLoading(true)
      const response = await getProjectsList();
      console.log(response.data);
      setResult(response.data);
      // TODO redirect vers 404 si status 404
=======
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, value) => {
    event.preventDefault();
    setCurrentPage(value);
    setCardsPerPage;
  };

  const nbPage = Math.ceil(result.length / cardsPerPage);

  const FetchData = async () => {
    try {
      setIsLoading(true);
      const response = await getProjectsList();
      console.log(response.data);
      setResult(response.data);
      setIsLoading(false);
>>>>>>> origin/fix-gitflow-process
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <Head />
      <Box className="allCards">
<<<<<<< HEAD
        {result && 
        <ProjectCardList result={result}
        cardPerPages={3}
        isLoading={isLoading}
        />
        }
        
=======
        <ProjectCardList result={currentCards} isLoading={isLoading} />
>>>>>>> origin/fix-gitflow-process
        <Container
          component="section"
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
        </Container> 
      </Box>
      <TopFooter />
    </>
  );
}
Home.propTypes = {};

Home.defaultProps = {};

export default React.memo(Home);

import React, { useEffect, useState, useRef } from 'react';
import ProjectCardList from '../../../components/ProjectCardList/ProjectCardList';
import CardPlaceholder from '../../../components/UI/Placeholder/CardPlaceholder';
// Services
import { getProjectsList } from '../../../services/projectService';

// Material UI
import { Pagination, Container } from '@mui/material';

// CSS
import './allProjectsStyles.scss';

// import PropTypes from 'prop-types';

function AllProject() {
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const flag = useRef(false);
  const nbPage = Math.ceil(result.length / cardsPerPage);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event, value) => {
    event.preventDefault();
    setCurrentPage(value);
    setCardsPerPage;
  };

  useEffect(() => {
    if (flag.current === false) {
      getProjectsList()
        .then((res) => {
          // Liste dans le state
          setResult(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = result.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="allProjects">
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
          sx={{ pt: 4 }}
        />
      </Container>
    </div>
  );
}
AllProject.propTypes = {};

AllProject.defaultProps = {};

export default React.memo(AllProject);

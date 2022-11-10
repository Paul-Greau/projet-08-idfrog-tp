/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

// Copoments
import ProjectCard from '../ProjectCard/ProjectCard';

// Material UI
import { Container, Grid, Box } from '@mui/material';

// CSS
// eslint-disable-next-line no-unused-vars
import { projectCardStyles } from '../ProjectCard/styles';

function ProjectCardList({ result }) {
 
  return (
    <Box component="section" maxWidth="medium">
      <Container component="section" maxWidth="lg">
        <Grid container spacing={2} alignItems="stretch">
          {result &&
            result.map((res) => (
              <Grid item xs={12} md={4} sm={6} key={res.id}>
                <ProjectCard
                  id={res.id}
                  createdAt={res.created_at}
                  projet={res.name}
                  amount={res.amount_target}
                  description={res.description}
                  profile={res.profile.pseudo}
                  contributions={res.contributions}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}

ProjectCardList.PropType = {};

ProjectCardList.defaultProps = {};

export default React.memo(ProjectCardList);

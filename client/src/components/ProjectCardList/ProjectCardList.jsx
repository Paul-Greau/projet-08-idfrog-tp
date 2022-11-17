/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectCardList({result}) {
  console.log({result})
  return (
    <Box component="section" maxWidth="medium">
      <Container component="section" maxWidth="lg">
        <Grid container spacing={1} alignItems="stretch">
          {result && (result.map((res) => (
              <Grid item xs={12} sm={4} key={res.id}>
                <ProjectCard 
                projet={res.name}
                amount={res.amount_target}
                description={res.description}
                profile={res.profile.pseudo}
                id={res.id}
                date={res.category.created_at}

                />
            </Grid>
          )))}

        </Grid>
      </Container>
    </Box>
  );
}

// ProjectCardList.PropType = {};

// ProjectCardList.defaultProps = {};

export default React.memo(ProjectCardList);

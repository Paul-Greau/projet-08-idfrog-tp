import React from 'react';
// import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectCardList() {
  return (
    <Box component="section" maxWidth="medium">
      <Container component="section" maxWidth="lg">
        <Grid container spacing={1} alignItems="stretch">
          <Grid item xs={12} sm={4}>
            <ProjectCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ProjectCardList.PropType = {};

ProjectCardList.defaultProps = {};

export default React.memo(ProjectCardList);

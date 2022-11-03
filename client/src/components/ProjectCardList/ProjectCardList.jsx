import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import ProjectCard from '../ProjectCard/ProjectCard';

export default function BasicGrid() {
  return (
    <Box
      component="section"
      maxWidth="medium"
      sx={{ backgroundColor: '#5de4d5' }}
    >
      <Container component="section" maxWidth="lg">
        <Grid container spacing={3} alignItems="stretch">
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

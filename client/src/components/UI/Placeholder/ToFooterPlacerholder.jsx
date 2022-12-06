import React from 'react';
// Matrerial UI
import { Grid, Container, Skeleton } from '@mui/material';
import { topFooterStyles } from '../../TopFooter/topFooterStyles';

function ToFooterPlacerholder() {
  return (
    <Container component="section" maxWidth="lg">
      <Grid
        container
        direction="row"
        spacing={3}
        sx={topFooterStyles.topFooterGrid}
      >
        <Grid item xs={12} md={8}>
          <Skeleton animation="wave" height={60} width="100%" />
          <Skeleton animation="wave" height={60} width="100%" />
          <Skeleton animation="wave" height={60} width="50%" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Skeleton animation="wave" height={90} width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default React.memo(ToFooterPlacerholder);

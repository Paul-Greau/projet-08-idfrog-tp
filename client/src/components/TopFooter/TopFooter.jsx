/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import PropTypes from "prop-types";
import { Grid } from '@mui/material';
// import { Link } from "@mui/material";
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';

import './topFooterStyles.scss';

function TopFooter() {
  return (
    <Container component="section" maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{
          padding: '5%',
        }}
      >
        <Grid item xs={12} md={8}>
          <Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
            Obtenez un financement non dilutif auprès de vos investisseurs.
          </Typography>
          <Typography sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
            Levez de{' '}
            <span style={{ fontSize: '1.6rem', color: '#5de4d5' }}>
              10 000 €{' '}
            </span>{' '}
            à
            <span style={{ fontSize: '1.6rem', color: '#5de4d5' }}>
              {' '}
              500 000 €
            </span>{' '}
            à votre rythme, de manière publique ou privée
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#5de4d5', color: '#fff', width: '100%' }}
          >
            Découvrez nos solutions
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
// TopFooter.PropType = {};

TopFooter.defaultProps = {};

export default React.memo(TopFooter);

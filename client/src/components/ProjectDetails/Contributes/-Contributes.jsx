/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Contributes = ({ contributes }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <Grid container>
      {contributes.map((contribute) => (
        <Grid
          item
          xs={6}
          md={4}
          key={contribute.id}
          sx={{ marginLeft: '10px', borderBottom: '1px solid lightgrey' }}
        >
          <Typography sx={{ fontWeight: 'bold', color: '#5de4d5' }}>
            <AccountCircleIcon />
            {contribute.profile.pseudo}
          </Typography>
          <Typography sx={{ fontSize: '0.7rem' }}>
            {new Date(contribute.created_at).toLocaleDateString(
              'fr-FR',
              options
            )}
          </Typography>
          <Typography>{contribute.invested_amount}€</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Contributes;

/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// CSS
import palette from '../../../assets/styles/_vars.scss';

const Comments = ({ comments }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <Grid container>
      {comments.map((comment) => (
        <Grid item xs={12} md={6} key={comment.id} sx={{ p: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: palette.secondary,
              transition: 'all 0.5s ease-in-out',
            }}
          >
            <AccountCircleIcon sx={{ color: palette.primary }} />
            <Box
              sx={{
                flexGrow: 1,
                px: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Typography sx={{ fontWeight: 'bold', color: palette.primary }}>
                {comment.profile.pseudo}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: '0.7rem', pl: 1 }}>
            {new Date(comment.created_at).toLocaleDateString('fr-FR', options)}
          </Typography>
          <Typography sx={{ borderBottom: '1px solid lightgrey', p: 1 }}>
            {comment.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Comments;

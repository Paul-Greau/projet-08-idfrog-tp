/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import PropTypes from "prop-types";
import { Grid } from '@mui/material';
// import { Link } from "@mui/material";
import { Typography } from '@mui/material';
// CSS
import palette from '../../assets/styles/_vars.scss';
import './styles.js';

function ProjectDescription({ result }) {
  return (
    <div className="projectdescription">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sx={{ mx: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '2rem',
              borderBottom: `1px solid ${palette.primary}`,
              mb: 1,
              pb: 1,
            }}
          >
            {result.name}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ mx: 4 }}>
          <Typography paragraph={true}>{result.resume}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
// Footer.PropType = {};

ProjectDescription.defaultProps = {};

export default React.memo(ProjectDescription);

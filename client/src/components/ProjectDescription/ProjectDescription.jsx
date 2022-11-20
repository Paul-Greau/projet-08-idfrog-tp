/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";

// Material UI
import { Grid, Typography, CardMedia } from "@mui/material";
// CSS
// import palette from '../../assets/styles/_vars.scss';
import { projectDescriptionStyles } from "./styles";

function ProjectDescription({ id, result }) {
  return (
    <div className="projectdescription">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sx={{ mx: 2, mt: -3 }}>
          <Typography variant="h1" sx={projectDescriptionStyles.title}>
            {result.name}
          </Typography>
        </Grid>
        <CardMedia
          component="img"
          height="240"
          src={`https://picsum.photos/1200/800?random=${id}`}
          alt={result.projet}
          sx={projectDescriptionStyles.img}
        />
        <Grid item xs={12} md={12} sx={{ mx: 4 }}>
          <Typography variant="h6" sx={projectDescriptionStyles.title2}>
            Description du projet :
          </Typography>
          <Typography paragraph={true} sx={projectDescriptionStyles.subtitle}>
            {result.resume}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
// Footer.PropType = {};

ProjectDescription.defaultProps = {};

export default React.memo(ProjectDescription);

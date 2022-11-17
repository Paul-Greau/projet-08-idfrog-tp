/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import PropTypes from "prop-types";
import { Grid } from "@mui/material";
// import { Link } from "@mui/material";
import { Typography } from "@mui/material";

import "./styles.js";

function ProjectDescription({result}) {
  return (
    <div className="projectdescription">
      <Grid 
        container 
        spacing={2}
        sx={{
          
        }}
      >
        <Grid item xs={12} md={12} sx={{borderBottom: "1px solid black"}}>
          <Typography variant="h1" sx={{fontSize: "2rem"}}>{result.name}</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography paragraph={true}>{result.resume}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
// Footer.PropType = {};

ProjectDescription.defaultProps = {};

export default React.memo(ProjectDescription);
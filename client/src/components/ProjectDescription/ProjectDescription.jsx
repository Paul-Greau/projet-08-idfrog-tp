/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import PropTypes from "prop-types";
import { Grid } from "@mui/material";
// import { Link } from "@mui/material";
import { Typography } from "@mui/material";

import "./projectDescriptionStyles.scss";

function ProjectDescription() {
  return (
    <div className="projectdescription">
      <Grid 
        container 
        spacing={2}
        sx={{
          
        }}
      >
        <Grid item xs={12} md={12} sx={{borderBottom: "1px solid black"}}>
          <Typography variant="h1" sx={{fontSize: "2rem"}}>Titre</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography paragraph={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod pellentesque dui, vitae hendrerit risus faucibus a. Donec pretium, quam ac sagittis commodo, eros enim hendrerit sapien, a vehicula enim ex vel ipsum. Mauris justo nulla, pharetra et nibh vel, condimentum semper tellus. Pellentesque non varius dolor. Proin iaculis dolor in cursus tempus. Nunc semper nisi vel diam sagittis porttitor. Aenean quam leo, pellentesque at urna at, cursus sagittis ligula. Quisque gravida ligula vitae odio pellentesque, ut egestas erat faucibus.</Typography>
        </Grid>
      </Grid>

    </div>
  );
}
// Footer.PropType = {};

ProjectDescription.defaultProps = {};

export default React.memo(ProjectDescription);
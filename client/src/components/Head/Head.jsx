/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import PropTypes from "prop-types";
import { Grid } from "@mui/material";
// import { Link } from "@mui/material";
import headImg from "../../assets/images/head-img.svg"
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
import AddchartIcon from "@mui/icons-material/Addchart";

import "./headStyles.scss";

function Head() {
  return (
    <div className="head">
      <Grid 
        container
        sx={{
        }}
      >
        <Grid item xs={12} md={6} sx={{}}>
          <Typography variant="h1" sx={{fontSize: "2rem"}}>Avec les solutions IdFrog <span>JE DONNE VIE !</span><span>à mes idées.</span></Typography>
          <Typography variant="h2" sx={{fontSize: "1rem"}}>Vous lancez un projet qui tient à cœur ? Et Vous avez besoin d'un coup de pouce financier</Typography>

          <Grid 
            container 
            spacing={0}
            sx={{
            }}
          >
            <Grid item xs={12} md={6} sx={{}}>
              <Button variant="outlined" endIcon={<InputIcon color="primary"/>}>
                    Delete
              </Button>
            </Grid>

            <Grid item xs={12} md={6} sx={{}}>
              <Button variant="outlined" endIcon={<AddchartIcon />}>
                Send
              </Button>
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12} md={6} sx={{}}>
          <img width="100%" src={headImg} className="head-logo" alt="Head Footer"></img>
        </Grid>
        
      </Grid>

    </div>
  );
}
// Head.PropType = {};

Head.defaultProps = {};

export default React.memo(Head);
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
        justifyContent="center"
        alignItems="center"
        sx={{
            paddingLeft: "50px"
        }}
      >
        <Grid item xs={12} md={6} sx={{}}>
          <Typography variant="h1" sx={{fontSize: "2rem"}}>Avec les solutions IdFrog </Typography>
          <Typography variant="h2" sx={{fontSize: "2rem", marginBottom: "20px"}}><span color="primary">JE DONNE VIE !</span><span color="primary"> à mes idées.</span></Typography>
          <Typography variant="h2" sx={{fontSize: "1rem", marginBottom: "10px"}}>Vous lancez un projet qui tient à cœur ? </Typography>
          <Typography variant="h2" sx={{fontSize: "1rem"}}>Et Vous avez besoin d'un coup de pouce financier ?</Typography>

          <Grid 
            container 
            spacing={2}
            sx={{
                paddingTop: "50px"
            }}
          >
            <Grid item xs={12} md={6} sx={{}}>
              <Button variant="outlined" endIcon={<InputIcon color="primary"/>} size="medium">
                    Contribuer au projet
              </Button>
            </Grid>

            <Grid item xs={12} md={6} sx={{}}>
              <Button variant="outlined" endIcon={<AddchartIcon />}>
                Déposer mon projet
              </Button>
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12} md={6} sx={{}}>
          <img width="80%" src={headImg} className="head-logo" alt="Head Footer"></img>
        </Grid>
        
      </Grid>

    </div>
  );
}
// Head.PropType = {};

Head.defaultProps = {};

export default React.memo(Head);
/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import PropTypes from "prop-types";
import { Grid } from "@mui/material";
// import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";


import "./topFooterStyles.scss";

function TopFooter() {
  return (
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={12}
        sx={{
            padding: "60px"
        }}
      >
        <Grid item xs={12} md={8} sx={{}}>
          <Typography variant="h2" sx={{fontSize: "1.3rem"}}>Obtenez un financement non dilutif auprès de vos investisseurs.</Typography>
          <Typography variant="h2" sx={{fontSize: "1.3rem"}}>Levez de <span color="primary">1 000 €</span> à <span color="primary">500 000 €</span> à votre rythme, de manière publique ou privée</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{}}>
            <Button variant="outlined" size="large" color="primary">
                Découvrez nos solutions
            </Button>
        </Grid>
        
      </Grid>
  );
}
// TopFooter.PropType = {};

TopFooter.defaultProps = {};

export default React.memo(TopFooter);
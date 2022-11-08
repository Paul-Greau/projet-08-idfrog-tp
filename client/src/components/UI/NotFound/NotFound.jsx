import React from 'react';
// import PropTypes from "prop-types";
import headImg from '../../../assets/images/notFound.svg';

// Material UI
import { Grid, Container } from '@mui/material';

// CSS
import './notFoundStyles.scss';

function NotFound() {
  return (
    <div className="NotFound">
      <Container component="section" maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} p={10}>
            <img src={headImg} alt="NotFound Footer"></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
// NotFound.PropType = {};

NotFound.defaultProps = {};

export default React.memo(NotFound);

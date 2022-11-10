/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import headImg from '../../assets/images/logo-bigfrog.png';

// Material UI
import { Typography, Grid, Button, Container } from '@mui/material';
import InputIcon from '@mui/icons-material/Input';
import AddchartIcon from '@mui/icons-material/Addchart';

// CSS
import palette from '../../assets/styles/_vars.scss';
import './headStyles.scss';

function Head() {
  return (
    <div className="head">
      <Container component="section" maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              color="secondary"
              sx={{ fontSize: '2rem', fontWeight: 'bold' }}
            >
              Avec les solutions IdFrog
            </Typography>
            <Typography
              variant="h2"
              color="secondary"
              sx={{
                fontSize: '2rem',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              <span style={{ color: palette.primary }}>JE DONNE </span>
              VIE ! <span style={{ color: palette.primary }}>à mes idées</span>.
            </Typography>
            <Typography
              variant="h2"
              color="secondary"
              sx={{ fontSize: '1rem', marginBottom: '10px', fontWeight: 700 }}
            >
              Vous lancez un projet qui tient à cœur ?
            </Typography>
            <Typography
              color="secondary"
              variant="h2"
              sx={{ fontSize: '1rem', fontWeight: 700 }}
            >
              Et Vous avez besoin d'un coup de pouce financier ?
            </Typography>

            <Grid
              container
              spacing={5}
              sx={{
                paddingTop: '50px',
              }}
            >
              <Grid item xs={12} md={6}>
                <Link to="subscribe">
                  <Button
                    variant="outlined"
                    endIcon={<InputIcon />}
                    size="medium"
                    sx={{
                      width: '100%',
                      fontWeight: 700,
                      border: `2px solid ${palette.primary}`,
                      '&:hover': {
                        color: palette.secondary,
                        backgroundColor: palette.primary,
                        border: `2px solid ${palette.primary}`,
                        background: ' rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    Contribuer au projet
                  </Button>
                </Link>
              </Grid>

              <Grid item xs={12} md={6}>
                <Link to="subscribe">
                  <Button
                    variant="contained"
                    endIcon={<AddchartIcon />}
                    sx={{
                      width: '100%',
                      color: '#fff',
                    }}
                  >
                    Déposer mon projet
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={headImg} className="head-logo" alt="Head Footer"></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
// Head.PropType = {};

Head.defaultProps = {};

export default React.memo(Head);

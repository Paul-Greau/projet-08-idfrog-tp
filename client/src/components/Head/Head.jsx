/* eslint-disable react/no-unescaped-entities */

import React from 'react';
// import PropTypes from "prop-types";
import { Grid } from '@mui/material';
// import { Link } from "@mui/material";
import headImg from '../../assets/images/head-img.svg';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import InputIcon from '@mui/icons-material/Input';
import AddchartIcon from '@mui/icons-material/Addchart';
import { Container } from '@mui/material';
import './headStyles.scss';


function Head() {
  return (
    <div className="head">
      <Container component="section" maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" sx={{}}>
          <Grid item xs={12} md={6} sx={{}}>
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
              <span style={{ color: '#5de4d5' }}>JE DONNE </span>
              VIE ! <span style={{ color: '#5de4d5' }}>à mes idées</span>.
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
              <Grid item xs={12} md={6} sx={{}}>
                <Button
                  variant="outlined"
                  endIcon={<InputIcon />}
                  size="medium"
                  sx={{
                    width: '100%',
                    fontWeight: 700,
                    border: '2px solid #5de4d5',
                    '&:hover': {
                      color: '#30394e',
                      border: '2px solid #30394e',
                      background: ' rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  Contribuer au projet
                </Button>
              </Grid>

              <Grid item xs={12} md={6}>
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

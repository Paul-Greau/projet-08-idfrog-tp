import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

// import PropTypes from "prop-types";

import ProjectProgress from '../ProjectProgress/ProjectProgress';

import './projectCollectStyles.scss';

function projectCollect() {
  const buttonPrimaryStyles = {
    fontSize: 14,
    backgroundColor: '#5de4d5',
    border: '2px solid #5de4d5',
    color: '#ffffff',
    fontWeight: 700,
    textTransform: 'none',
    borderRadius: '50px',
    padding: '5px 10px',
    '&:hover': {
      color: '#5de4d5',
    },
  };
  const buttonSecondaryStyles = {
    fontSize: 14,
    backgroundColor: '#d9d9d9',
    border: '2px solid #d9d9d9',
    color: '#ffffff',
    textTransform: 'none',
    borderRadius: '50px',
    padding: '5px 10px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      color: '#30394e',
    },
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, marginTop: '20px', marginBottom: '2rem' }}
            color="primary"
          >
            John Doe • 4 Feb 2022
          </Typography>
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            component="div"
          >
            Modalités d&apos;investissement
          </Typography>
          <Typography variant="body2" color="secondary.light">
            Votre contribution vous sera intégralement remboursée si le projet
            n&apos;atteint pas 100% de son objectif.
          </Typography>
        </CardContent>

        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="secondary" gutterBottom>
            403 630€ sur <span style={{ fontSize: 24 }}>702 000€</span>
          </Typography>
          <ProjectProgress></ProjectProgress>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            padding: '15px',
          }}
        >
          <Button size="small" sx={buttonPrimaryStyles}>
            Contribuer au projet &gt;
          </Button>
          <Button size="small" sx={buttonSecondaryStyles}>
            Partager +
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          margin: '40px',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography
            color="secondary"
            gutterBottom
            variant="h7"
            component="div"
            sx={{ fontWeight: '500' }}
          >
            Souhaitez vous que votre projet soit :
          </Typography>
          <FormControl component="fieldset" sx={{ margin: '0.5em' }}>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="prive"
                control={<Switch color="primary" />}
                label="Privé"
                labelPlacement="end"
              />
              <FormControlLabel
                value="public"
                control={<Switch color="primary" />}
                label="Public"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
          <Typography
            color="secondary"
            gutterBottom
            variant="p"
            component="div"
            sx={{ fontWeight: '100', fontSize: '12px' }}
          >
            privé: votre projet ne sera pas publié sur la page d&apos;acceuil
            public votre projet sera visible en page d’acceuil
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
projectCollect.propTypes = {};

projectCollect.defaultProps = {};

export default React.memo(projectCollect);

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import PropTypes from "prop-types";

import topCardImage from '../../assets/images/PlaceholderImage.jpg';
import ProjectProgress from '../projectProgress/projectProgress';

import './projectCardStyles.scss';

function projectCard() {
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={topCardImage}
        alt="image du projet"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
          John Doe • 4 Feb 2022
        </Typography>
        <Typography color="secondary" gutterBottom variant="h5" component="div">
          Application IdFrog
        </Typography>
        <Typography
          variant="body2"
          color="secondary.light"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
          }}
        >
          idFrog serait une plateforme de type boîte à idées. Cette plateforme
          aurait pour but de mettre en relation des personnes ayant une ou
          plusieurs idée(s) et ne sachant pas comment la financer avec une base
          d&apos;investisseurs (Business Angels) inscrits sur la plateforme.
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
  );
}
projectCard.propTypes = {};

projectCard.defaultProps = {};

export default React.memo(projectCard);

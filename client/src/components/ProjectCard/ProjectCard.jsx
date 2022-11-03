import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { projectCardStyles } from './styles';

// import PropTypes from "prop-types";

import topCardImage from '../../assets/images/PlaceholderImage.jpg';
import ProjectProgress from '../ProjectProgress/ProjectProgress';

function ProjectCard() {
  return (
    <Card sx={{ maxWidth: '100%', marginBottom: '30px', marginTop: '30px' }}>
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
        <Typography color="secondary.light" sx={projectCardStyles.summary}>
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

      <CardActions sx={projectCardStyles.cardAction}>
        <Button size="small" sx={projectCardStyles.btnPrimary}>
          Contribuer au projet &gt;
        </Button>
        <Button size="small" sx={projectCardStyles.btnSecondary}>
          Partager +
        </Button>
      </CardActions>
    </Card>
  );
}
ProjectCard.propTypes = {};

ProjectCard.defaultProps = {};

export default React.memo(ProjectCard);

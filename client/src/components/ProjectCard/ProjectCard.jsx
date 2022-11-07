/* eslint-disable react/prop-types */
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
import { Link } from 'react-router-dom';

function ProjectCard({projet, amount, description, profile, id, date}) {
  return (
    <Card sx={{ maxWidth: '100%', marginBottom: '30px', marginTop: '30px' }}>
      <Link to={`/project/${id}`}>
      <CardMedia
        component="img"
        height="140"
        image={topCardImage}
        alt="image du projet"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
          {profile} • {date}
        </Typography>
        <Typography color="secondary" gutterBottom variant="h5" component="div">
          {projet}
        </Typography>
        <Typography color="secondary.light" sx={projectCardStyles.summary}>
        {description}
        </Typography>
      </CardContent>
      </Link>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="secondary" gutterBottom>
          403 630€ sur <span style={{ fontSize: 24 }}>{amount}€</span>
        </Typography>
        <ProjectProgress></ProjectProgress>
      </CardContent>

      <CardActions sx={projectCardStyles.cardAction}>
        <Link to={`/project/${id}`}>
        <Button size="small" sx={projectCardStyles.btnPrimary}>
          Contribuer au projet &gt;
        </Button>
        </Link>
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

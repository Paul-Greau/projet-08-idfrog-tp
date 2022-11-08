/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

// CSS
import { projectCardStyles } from './styles';

// import PropTypes from "prop-types";

// import topCardImage from '../../assets/images/PlaceholderImage.jpg';
import ProjectProgress from '../ProjectProgress/ProjectProgress';

function ProjectCard({ id, projet, amount, description, profile }) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        src={`https://picsum.photos/1200/800?random=${id}`}
        alt={projet}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
          {profile} • 4 Feb 2022
        </Typography>
        <Typography color="secondary" gutterBottom variant="h5" component="div">
          {projet}
        </Typography>
        <Typography color="secondary.light" sx={projectCardStyles.summary}>
          {description}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="secondary" gutterBottom>
          403 630€ sur <span style={{ fontSize: 24 }}>{amount}€</span>
        </Typography>
        <ProjectProgress></ProjectProgress>
      </CardContent>

      <CardActions sx={projectCardStyles.cardAction}>
        <Link to="subscribe">
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

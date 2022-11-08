/* eslint-disable react/prop-types */
import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';

// CSS
import { projectCollectStyles } from './styles';

// import PropTypes from "prop-types";

// import topCardImage from '../../assets/images/PlaceholderImage.jpg';
import ProjectProgress from '../ProjectProgress/ProjectProgress';

function projectCollect({ id, projet, amount, description, profile }) {
  return (
    <>
          <Card sx={{ maxWidth: '100%' }}>
      <Link to={`/project/${id}`}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
          {profile} • 4 Feb 2022
        </Typography>
        <Typography color="secondary" gutterBottom variant="h5" component="div">
          {projet}
        </Typography>
        <Typography color="secondary.light" sx={projectCollectStyles.summary}>
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

      <CardActions sx={projectCollectStyles.cardAction}>
        <Link to="subscribe">
          <Button size="small" sx={projectCollectStyles.btnPrimary}>
            Contribuer au projet &gt;
          </Button>
        </Link>
        <Button size="small" sx={projectCollectStyles.btnSecondary}>
          Partager +
        </Button>
      </CardActions>
    </Card>
      <Card sx={projectCollectStyles.card}>
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

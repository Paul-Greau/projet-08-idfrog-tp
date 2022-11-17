import * as React from 'react';
// import PropTypes from "prop-types";

// Components
import ProjectProgress from '../ProjectProgress/ProjectProgress';

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

function projectCollect() {
  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: '30px' }}>
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

        <CardActions sx={projectCollectStyles.carAction}>
          <Button size="small" sx={projectCollectStyles.btnPrimary}>
            Contribuer au projet &gt;
          </Button>
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
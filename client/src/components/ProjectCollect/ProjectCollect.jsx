/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from "prop-types";

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

import ProjectProgress from '../ProjectProgress/ProjectProgress';
// CSS
import { projectCollectStyles } from './styles';

// RECOIL
import { useRecoilValue } from 'recoil';
import { profileConnexionstate } from '../../atomes/profileAtomes';
import { patchProject } from '../../services/projectService';

function ProjectCollect({
  amount,
  profile,
  createdAt,
  contributions,
  visibility,
  project_id
}) {

  const {token} = useRecoilValue(profileConnexionstate)
  const ProfileInfo = useRecoilValue(profileConnexionstate);
  const [visibilityState, setvisibilityState ]=useState(visibility);

const handleVisibilityState = () => {
    // req axios patch project

  console.log(project_id, token);
  const response = patchProject(project_id, token, {visibility: !visibilityState})
  console.log(response);
  setvisibilityState(!visibilityState)
}

console.log('visibility', visibilityState);

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const [totalContributions, setTotalContributions] = useState(0);
  const [progressRatio, setProgressRatio] = useState(0);

  const progressRate = (contributionslist) => {
    let totalContribution = 0;
    if (contributionslist?.length === 0) {
      setTotalContributions(0);
      setProgressRatio(0);
    }
    contributionslist?.map(
      (contribution) => (totalContribution += contribution.invested_amount)
    );
    const rate = Number((100 * totalContribution) / amount);
    setTotalContributions(totalContribution);
    setProgressRatio(rate);
  };

  useEffect(() => {
    progressRate(contributions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressRate]);

  return (
    <>
      <Card sx={{ mx: 4, mt: 5, m: { xl: 2, md: 2, xs: 2 } }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
            {profile} •{' '}
            {new Date(createdAt).toLocaleDateString('fr-FR', options)}
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
            {totalContributions}€ sur{' '}
            <span style={{ fontSize: 24 }}>{amount}€</span>
          </Typography>
          <ProjectProgress progressRate={progressRatio} />
        </CardContent>

        <CardActions sx={projectCollectStyles.carAction}>
          {!ProfileInfo.isLogged ? (
            <Link to="/subscribe">
              <Button size="small" sx={projectCollectStyles.btnPrimary}>
                Contribuer au projet &gt;
              </Button>
            </Link>
          ) : (
            <Link to="/profile/contribut">
              <Button size="small" sx={projectCollectStyles.btnPrimary}>
                Contribuer au projet &gt;
              </Button>
            </Link>
          )}

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
          <FormGroup aria-label="position" row
          value={visibility}
          >
            <FormControlLabel
              checked={!visibilityState}
              onChange={() => handleVisibilityState()}
              value="false"
              control={<Switch color="primary" />}
              label="Privé"
              labelPlacement="end"
            />
            <FormControlLabel
              checked={visibilityState}
              onChange={() => handleVisibilityState()}
              value="true"
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

ProjectCollect.propTypes = {};

ProjectCollect.defaultProps = {};

export default React.memo(ProjectCollect);

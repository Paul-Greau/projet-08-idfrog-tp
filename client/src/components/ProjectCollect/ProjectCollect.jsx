/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
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

function ProjectCollect({ id, projet, amount, description, profile, createdAt, contributions }) {

    console.log({contributions})

    const options = { /* weekday: 'long' ,*/ year: 'numeric', month: 'short', day: 'numeric' };

const [totalContributions, setTotalContributions] = useState(0)
const [progressRatio, setProgressRatio] = useState(0)

const progressRate = (contributionslist) => {
  let totalContribution = 0;
  if(contributionslist?.length === 0){
    setTotalContributions(0)
    setProgressRatio(0)
  }
  contributionslist?.map((contribution) => (
    totalContribution += contribution.invested_amount
  ));
  const rate = Number((100 * totalContribution / amount))
  setTotalContributions(totalContribution)
  setProgressRatio(rate)
}  

useEffect(() => {
  progressRate(contributions)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[progressRate])

  return (
    <>
          <Card sx={{ maxWidth: '100%' }}>
      <Link to={`/project/${id}`}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
          {profile} • {new Date (createdAt).toLocaleDateString("fr-FR", options)}
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
        {totalContributions}€ sur <span style={{ fontSize: 24 }}>{amount}€</span>
        </Typography>
        <ProjectProgress 
        progressRate = {progressRatio}
        />
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
ProjectCollect.propTypes = {};

ProjectCollect.defaultProps = {};

export default React.memo(ProjectCollect);

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, CardMedia } from '@mui/material';
// Services
import { getProjectById } from '../../../services/projects';
// Components
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription';
import ProjectDetails from '../../../components/ProjectDetails/ProjectDetails';
import ProjectCollect from '../../../components/ProjectCollect/ProjectCollect';

const Project = () => {
  const [result, setResult] = useState([]);
  const { id } = useParams();

  const flag = useRef(false);

  // Récupération de la liste des utilisateurs à l'affichage
  useEffect(() => {
    if (flag.current === false) {
      getProjectById(id)
        .then((res) => {
          // Liste dans le state
          setResult(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
  }, [id]);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12}>
        <CardMedia
          component="img"
          height="40"
          src={`https://picsum.photos/1200/800?random=${id}`}
          alt={result.projet}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <ProjectDescription result={result} />
      </Grid>
      <Grid item xs={12} md={4}>
        <ProjectCollect
          id={result.id}
          createdAt={result.created_at}
          projet={result.name}
          amount={result.amount_target}
          description={result.description}
          profile={result.profile?.pseudo}
          contributions={result.contributions}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <ProjectDetails result={result} />
      </Grid>
    </Grid>
  );
};

export default Project;

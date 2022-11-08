import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { Grid, CardMedia } from '@mui/material';
// Services
import {getProjectById} from '../../../services/projects';
// Components
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import ProjectDetails from '../../../components/ProjectDetails/ProjectDetails';

const Project = () => {

    const [result, setResult] = useState([]);
    const { id } = useParams();


    const flag = useRef(false)

    // Récupération de la liste des utilisateurs à l'affichage
    useEffect(() => {
        if(flag.current === false){
            getProjectById(id)
                .then(res => {
                    // Liste dans le state
                    setResult(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true

    }, [id])

    return (
        <Grid container spacing={5} sx={{padding: "0 50px", marginTop: "5px"}}>
            <Grid item xs={12} md={12}>
            <CardMedia
                component="img"
                height="140"
                src={`https://picsum.photos/1200/800?random=${id}`}
                alt={result.projet}
            />
            </Grid>
            <Grid item xs={12} md={8}>
                <ProjectDescription
                result={result}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <ProjectCard
                id={result.id}
                projet={result.name}
                amount={result.amount_target}
                description={result.description}
                profile={result.profile?.pseudo}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <ProjectDetails
                />
            </Grid>
        </Grid>
    );
};

export default Project;
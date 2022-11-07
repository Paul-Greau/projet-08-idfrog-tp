/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Comments = ({comments}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <Grid container>
            {(comments.map((comment) => (
            <Grid item xs={6} md={6} key={comment.id} sx={{marginLeft:"10px", borderBottom: "1px solid lightgrey"}}>
                <Typography sx={{fontWeight: "bold", color: "#5de4d5"}}><AccountCircleIcon/>{comment.profile.pseudo}</Typography>
                <Typography sx={{fontSize: "0.7rem"}}>Le {new Date (comment.created_at).toLocaleDateString("fr-FR", options)}</Typography>
                <Typography>{comment.text}</Typography>               
            </Grid>
            
                
            
            )))}
        </Grid>
    );
};

export default Comments;
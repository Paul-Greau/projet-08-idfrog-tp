/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography } from '@mui/material';

<<<<<<< HEAD
const Project = ({ resume, description, name }) => {
  return (
    <div>
      <Box sx={{ padding: '15px' }}>
        <Typography sx={{ fontWeight: 'bold', paddingBottom: '10px' }}>
          Le mot du porteur de projet
        </Typography>
        <Typography> {resume}</Typography>
      </Box>
      <Box sx={{ padding: '15px' }}>
        <Typography sx={{ fontWeight: 'bold', paddingBottom: '10px' }}>
          {name}, c&apos;est quoi concrètement ?
        </Typography>
        <Typography> {description}</Typography>
      </Box>
    </div>
  );
};

export default Project;
=======
const Project = ({resume, description, name}) => {
    return (
        <div>
            <Box sx={{padding: "15px"}}>
                <Typography sx={{fontWeight: "bold", paddingBottom: "10px"}}> Le mot du porteur de projet</Typography>
                <Typography > {resume}</Typography>
            </Box>
            <Box sx={{padding: "15px"}}>
                <Typography sx={{fontWeight: "bold", paddingBottom: "10px"}}> {name}, c&apos;est quoi concrètement ?</Typography>
                <Typography > {description}</Typography>
            </Box>
        </div>
    );
};

export default Project;
>>>>>>> develop

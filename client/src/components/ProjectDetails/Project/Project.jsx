/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography } from '@mui/material';

const Project = ({resume, description, name}) => {
    return (
        <div>
            <Box>
                <Typography variant="h5"> Le mot du porteur de projet</Typography>
                <Typography variant="h6"> {resume}</Typography>
            </Box>
            <Box>
                <Typography variant="h5"> {name}, c&apos;est quoi concrètement ?</Typography>
                <Typography variant="h6"> {description}</Typography>
            </Box>
        </div>
    );
};

export default Project;
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography } from '@mui/material';

const Comments = ({comments}) => {
    return (
        <div>
            {(comments.map((comment) => (
            <Box key={comment.id} sx={{marginLeft:"10px", borderBottom: "1px solid lightgrey"}}>
                <Typography sx={{fontWeight: "bold", color: "#5de4d5"}}>{comment.profile.pseudo}</Typography>
                <Typography>{comment.text}</Typography>
                <Typography>{comment.created_at}</Typography>
            </Box>
            )))}
        </div>
    );
};

export default Comments;
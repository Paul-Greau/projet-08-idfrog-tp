/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography } from '@mui/material';

const Contributes = ({contributes}) => {
    return (
        <div>
            {(contributes.map((contribute) => (
            <Box key={contribute.id} sx={{marginLeft:"10px", borderBottom: "1px solid lightgrey"}}>
                <Typography sx={{fontWeight: "bold", color: "#5de4d5"}}>{contribute.profile.pseudo}</Typography>
                <Typography>{contribute.invested_amount}€</Typography>
                <Typography>{contribute.created_at}</Typography>
            </Box>
            )))}
        </div>
    );
};

export default Contributes;
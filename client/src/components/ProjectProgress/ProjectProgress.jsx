/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// Material UI
import { LinearProgress, Typography, Box } from '@mui/material';

// CSS
import { projectProgressStyles } from './styles';

function ProgressLine(props) {
  return (
    <Box sx={projectProgressStyles.box1}>
      <Box sx={projectProgressStyles.box2}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function ProjectProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(progress + 50);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography></Typography>
      <ProgressLine value={progress} />
    </Box>
  );
}

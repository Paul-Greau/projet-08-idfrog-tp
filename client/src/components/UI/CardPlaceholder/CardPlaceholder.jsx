import React from 'react';
import { Card, Skeleton } from '@mui/material';
const ProjectCardPlaceholder = () => {
  return (
    <Card sx={{ marginLeft: 2, marginBottom: 2, marginTop: 1 }}>
      <Skeleton height={380} width={373} />
      <Skeleton height={24} style={{ marginTop: 22 }} />
      <Skeleton height={20} style={{ marginTop: 10, marginBottom: 22 }} />
      <Skeleton height={14} count={3} style={{ marginTop: 4 }} />
      <Skeleton height={21} width={80} style={{ marginTop: 14 }} />
    </Card>
  );
};

export default ProjectCardPlaceholder;

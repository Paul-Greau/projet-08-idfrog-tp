import React from 'react';
import {Card, Skeleton} from '@mui/material'
const ProjectCardPlaceholder = () => {
    return (
        <Card >
            <Skeleton height={200} width={260} />
            <Skeleton height={24} style={{ marginTop: 22 }} />
            <Skeleton height={20} style={{ marginTop: 10, marginBottom: 22 }} />
            <Skeleton height={14} count={3} style={{ marginTop: 4 }} />
            <Skeleton height={21} width={80} style={{ marginTop: 14 }} />
        </Card>
    );
};

export default ProjectCardPlaceholder;
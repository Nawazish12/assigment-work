import React from 'react';
import { Skeleton } from '@mui/material';

interface CommonSkeletonProps {
    count: number;
}

const CommonSkeleton: React.FC<CommonSkeletonProps> = ({ count }) => {
    const skeletons = Array.from({ length: count }, (_, index) => (
        <Skeleton key={index} variant="text" height={100} />
    ));

    return <>{skeletons}</>;
};

export default CommonSkeleton;
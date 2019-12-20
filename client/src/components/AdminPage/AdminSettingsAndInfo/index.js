import React from 'react';
import { withWidth, Typography, Box} from '@material-ui/core';

export default withWidth()(() => {
    return (
        <Typography component="div" variant="body1">
            <Box color="secondary.main" p={3} pl={6} pr={6} ml={2} mr={2} borderBottom={1} textAlign="center" fontSize="h6.fontSize">SETTINGS AND INFO</Box>
        </Typography>
    )
});
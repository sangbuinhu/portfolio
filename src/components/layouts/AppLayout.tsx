import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../common/AppBar';
type Props = {};

const AppLayout = (props: Props) => {
    return (
        <Box bgcolor={'#f0ebe3'}>
            <AppBar />
            <Outlet />
        </Box>
    );
};

export default AppLayout;
import { Box, Grid, Paper, styled } from '@mui/material';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "70vh"
}));

const Login = () => {
    return (
        <Box sx={{
            flexGrow: 1,
        }}>
            <Grid container spacing={1} sx={{
                height: "88vh",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Grid item xs={8} sm={4}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Item>xs=4</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;
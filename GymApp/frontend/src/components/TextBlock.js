import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

export const TextBlock = (props) => {
    return (
        <Container maxWidth="sm">
            <Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <h1>{props.title}</h1>
                    </Grid>
                    <Grid item xs={8}>
                        <p>{props.text}</p>
                    </Grid>
                </Grid>
            </Typography>
        </Container>
    );  
}

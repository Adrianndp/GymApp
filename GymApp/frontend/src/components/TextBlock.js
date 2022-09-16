import React from 'react';
import { Typography, Container, Grid } from '@mui/material';

export const TextBlock = () => {
    return (
        <Container maxWidth="sm">
            <Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <h1>Title</h1>
                    </Grid>
                    <Grid item xs={8}>
                        <p>content that is not important . s vj svlkjds vlhs vjsk jksd vs vkj </p>
                    </Grid>
                </Grid>
            </Typography>
        </Container>
    );  
}

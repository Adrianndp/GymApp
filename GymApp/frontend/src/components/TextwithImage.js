import React from 'react';
import { Typography, Grid } from '@mui/material';

export const TextwithImage = (props) => {
    //pt, pb = padding top and bottom
    return (
            <Typography pt={10} pb={10}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <h1>{props.title}</h1>
                    </Grid>
                    <Grid item md={3}>
                        photo
                    </Grid>
                </Grid>
            </Typography>
    );  
}

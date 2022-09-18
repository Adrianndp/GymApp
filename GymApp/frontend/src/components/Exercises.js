import React from 'react';
import { Typography, Grid } from '@mui/material';


export const Exercises = () => {
  return (
    <div>
    <h1>Exercises by Muscle</h1>
        <Typography pt={10} pb={10}>
            <Grid container spacing={4}>
                <Grid item md={3}>
                    <p>Chest</p>
                </Grid>
                <Grid item md={3}>
                    <p>Back</p>
                </Grid>
                <Grid item md={3}>
                    <p>Legs</p>
                </Grid>
                <Grid item md={3}>
                    <p>Biceps</p>
                </Grid>
            </Grid>
        </Typography>
    </div>
  )
}

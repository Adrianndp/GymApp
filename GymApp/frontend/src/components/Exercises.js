import React from 'react';
import { Typography, Grid } from '@mui/material';
import Exercise from './Exercise';


export const Exercises = () => {
  return (
    <div>
    <h1>Exercises by Muscle</h1>
        <Typography pt={10} pb={10}>
            <Grid container spacing={4}>
                <Grid item md={3}>
                    <Exercise name="Chest" />
                </Grid>
                <Grid item md={3}>
                    <Exercise name="Back" />
                </Grid>
                <Grid item md={3}>
                    <Exercise name="Legs" />
                </Grid>
                <Grid item md={3}>
                    <Exercise name="Biceps" />
                </Grid>
            </Grid>
        </Typography>
    </div>
  )
}

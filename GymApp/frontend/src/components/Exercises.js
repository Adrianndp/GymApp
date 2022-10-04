import React from 'react';
import { Typography, Grid } from '@mui/material';
import Exercise from './Exercise';


export const Exercises = (props) => {
  return (
    <div>
        <h1>Exercises by Muscle Groups</h1>
        <h4>Check out your favorite exercises of your favorite muscles
        </h4>
        <Typography pt={10} pb={10}>
            <Grid container spacing={4}  justifyContent="center" alignItems="center">
                {props.muscles.map(d => (
                    <Grid item xs={6} md={4}>
                        <Exercise name={d} />
                    </Grid>
                ))} 
            </Grid>
        </Typography>
    </div>
  )
}

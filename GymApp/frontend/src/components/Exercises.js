import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';


export const Exercises = (props) => {
  return (
    <div>
        <div style={{ textAlign: 'center' }} >
            <h1>Exercises by Muscle Groups</h1>
            <p style={{ color: 'gray' }}>Check out your favorite exercises of your favorite muscles</p>
        </div>
        <Typography pt={5} pb={10}>
            <Grid container spacing={4}  justifyContent="center" alignItems="center">
                {props.muscles.map(d => (
                    <Grid item xs={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea style={{ background: '#1976d2',  color: 'white' }} href={`api/exercises/${d}`}>
                                <CardContent>
                                <Typography gutterBottom component="div" justifyContent="center">
                                    {d}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))} 
            </Grid>
        </Typography>
    </div>
  )
}

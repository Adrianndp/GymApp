// Welcome Page
import React, {useState, useEffect } from 'react'
import { Hero } from "./Hero";
import { Footer } from './Footer';
import { Button, Container, Box } from '@mui/material';
import { Typography, Grid } from '@mui/material';
import { Exercises } from './Exercises';


export const Home = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
      fetch("/api/get_muscles")
        .then(response => response.json())
        .then(json => setData(json.data))
        .catch(err => {
          console.log("Error Reading data " + err);
        });
  }, [])

  return (
    <div>  
      <Hero />
      <Container maxWidth="sm">
        <Typography pt={10} pb={10}>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <h1>"Design your own rutine!"</h1>
                </Grid>
                <Grid item md={3}>
                    photo
                </Grid>
            </Grid>
        </Typography>
        <Box textAlign='center'>
          <Button href="test" className='button'>Try it out</Button>
        </Box>
        <Exercises muscles={data} />
      </Container>
      <Footer />
    </div>
  )
}

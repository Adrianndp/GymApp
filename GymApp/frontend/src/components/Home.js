// Welcome Page
import React, {useState, useEffect } from 'react'
import LazyHero from 'react-lazy-hero';
import { Button, Container, Box } from '@mui/material';
import { Exercises } from './Exercises';


export const Home = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
      fetch("/api/muscleGroup")
        .then(response => response.json())
        .then(json => setData(json.data))
        .catch(err => {
          console.log("Error Reading data " + err);
        });
  }, [])

  return (
    <div>  
      <LazyHero imageSrc="static/images/hero.webp" minHeight="100vh" opacity="0.7">
      <h1>Can you feel the Heat? </h1>
        <Box textAlign='center' pb={5}>
          <Button href="routine" className='button'>Design your own routine for free</Button>
        </Box>
      </LazyHero>
      <Container maxWidth="md">
        <Exercises muscles={data} />
      </Container>
      <div className="footer">
        <p style={{color: "gray"}}>2022 Gymwolf Blog. Built using Django with React.</p>
      </div>
    </div>
  )
}

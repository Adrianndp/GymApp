// Welcome Page
import React from 'react'
import { Hero } from "./Hero";
import { TextwithImage } from './TextwithImage';
import { Footer } from './Footer';
import { Button, Container, Box } from '@mui/material';
import { Exercises } from './Exercises';


export const Home = () => {
  return (
    <div>  
      <Hero />
      <Container maxWidth="sm">
        <TextwithImage title="Design your own rutine!" image_file_name="workout.jpg"/> 
        <Box textAlign='center'>
          <Button href="test" className='button'>Try it out</Button>
        </Box>
        <Exercises />
      </Container>
      <Footer />
    </div>
  )
}

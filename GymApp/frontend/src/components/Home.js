// Welcome Page
import React, {useState, useEffect } from 'react'
import { Hero } from "./Hero";
import { TextwithImage } from './TextwithImage';
import { Footer } from './Footer';
import { Button, Container, Box } from '@mui/material';
import { Exercises } from './Exercises';


export const Home = () => {

  useEffect(()=>{
      // here fetch logic only will run once "componentdidmount"
      console.log("rendered");
  }, [])

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

// Welcome Page
import React, {useState, useEffect } from 'react'
import { Hero } from "./Hero";
import { TextwithImage } from './TextwithImage';
import { Footer } from './Footer';
import { Button, Container, Box } from '@mui/material';
import { Exercises } from './Exercises';


export const Home = () => {

  const [data, setData] = useState(null);

  useEffect(()=>{
      // here fetch logic only will run once "componentdidmount"
      fetch("/api/get_muscles")
        .then(response => response.json())
        .then(json => setData(json))
        .catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
        });
      console.log("rendered");
  }, [])

  return (
    <div>  
      <Hero />
      <Container maxWidth="sm">
        {JSON.stringify(data)}
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

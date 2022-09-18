// Welcome Page
import React from 'react'
import { Hero } from "./Hero";
import { TextBlock } from './TextBlock';
import { Footer } from './Footer';
import { Button, Container } from '@mui/material';
import { Exercises } from './Exercises';


export const Home = () => {
  return (
    <div>  
      <Hero />
      <Container maxWidth="sm">
        <TextBlock title="Design your own rutine!" text="Put image"/> 
        <Button href="test" className='button'>Try it out</Button>
        <Exercises />
      </Container>
      <Footer />
    </div>
  )
}

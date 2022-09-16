// Welcome Page
import React from 'react'
import { Hero } from "./Hero";
import { TextBlock } from './TextBlock';
import { Footer } from './Footer';
import { Button, Container } from '@mui/material';


export const Home = () => {
  return (
    <div>  
      <Hero />
      <Container maxWidth="sm">
        <TextBlock title="Start where you are. Use what you have. Do what you can." text="Start right now doing your gym rutine so you can implement it tomorrow!"/> 
        <TextBlock title="Design your own rutine!" text="Enough of waiting for personal trainer to fall from the sky. Try out our virtual gym and get ready"/> 
        <Button href="test" className='button'>Try it out</Button>
      </Container>
      <Footer />
    </div>
  )
}

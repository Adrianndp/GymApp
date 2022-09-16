// Welcome Page
import React from 'react'
import { Hero } from "./Hero";
import { ContactPopper } from "./ContactPopper"
import { TextBlock } from './TextBlock';
import { Footer } from './Footer';


export const Home = () => {
  return (
    <div>  
      <Hero />
      <ContactPopper />
      <TextBlock /> 
      <Footer />
    </div>
  )
}

// Welcome Page
import React from 'react'
import { Hero } from "./Hero";
import { ContactPopper } from "./ContactPopper"
import { TextBlock } from './TextBlock';


export const Home = () => {
  return (
    <div>  
      <ContactPopper />
      <TextBlock /> 
      <Hero />
    </div>
  )
}

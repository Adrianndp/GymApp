// Welcome Page
import React from 'react'
import { Hero } from "./Hero";
import { TextBlock } from './TextBlock';
import { Footer } from './Footer';


export const Home = () => {
  return (
    <div>  
      <Hero />
      <TextBlock title="Example of title" text="Example of a text"/> 
      <Footer />
    </div>
  )
}

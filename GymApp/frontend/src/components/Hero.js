import React from 'react'
import LazyHero from 'react-lazy-hero';

export const Hero = () => {
  return (
    <LazyHero imageSrc="static/images/hero.webp" minHeight="100vh" opacity="0.7">
        <h1>Can you feel the Heat?</h1>
    </LazyHero>
  )
}

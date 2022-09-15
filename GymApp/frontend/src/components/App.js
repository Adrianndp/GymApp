import React, { Component } from "react";
import { Box } from '@mui/material';
import { render } from "react-dom";
import { Navbar } from "./Navbar";
import { HomePage } from "./HomePage";
// Handle app Body
import { Footer } from "./Footer";
import React from 'react'

export const App = () => {
  return (
    <Box width="400px">
        <Navbar />
        <HomePage />
        <Footer />
    </Box>
  )
}
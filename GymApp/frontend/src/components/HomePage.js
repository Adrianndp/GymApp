// Handle all the routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Exercise } from './Exercise'
import StepperRoutine from './StepperRoutine';

export const HomePage = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routine" element={<StepperRoutine />} /> 
          <Route path="/muscleGroup/:muscle/" element={<Exercise />} /> 
        </Routes>
    </Router>
  );
}


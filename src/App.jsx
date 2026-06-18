import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Divider from './components/Divider';
import Why from './components/Why';
import Capacity from './components/Capacity';
import Specs from './components/Specs';
import Process from './components/Process';
import Compliance from './components/Compliance';
import Community from './components/Community';
import Inquiry from './components/Inquiry';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Divider />
      <Why />
      <Divider />
      <Capacity />
      <Specs />
      <Process />
      <Compliance />
      <Community />
      <Inquiry />
      <Footer />
    </div>
  );
}

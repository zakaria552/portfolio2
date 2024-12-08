// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./index.css"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return <>
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  </>
}

export default App;
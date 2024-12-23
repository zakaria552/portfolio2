// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./index.css"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true)
  return <>
    <main>
      <Navbar/>
      <Hero loading={loading} setLoading={setLoading}/>
      {!loading && <>
        <About/>
        <Projects/>
        <Footer/>
      </>
      }
    </main>
  </>
}

export default App;
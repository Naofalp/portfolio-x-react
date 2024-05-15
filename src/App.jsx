import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from './components/Service';
import Tools from './components/Tools';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useEffect } from 'react';



function App() {
  
  useEffect(() => {
    document.title = "Portfolio de NPereira";
  }, []);

  return <>
    <Header />
    <main>
      <Banner />
      <About />
      <Service />
      <Tools />
      <Works />
      <Contact />
      <Footer />
    </main>
  </>
}

export default App
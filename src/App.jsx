import React from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from './components/Service';
import Tools from './components/Tools';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return <>
    <Header />
    <main>
      <Banner />
      <About />
      <Service />
      <Tools />
      <Works />
      <Contact/>
      <Footer/>
    </main>
  </>
}

export default App
import React from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from './components/Service';
import Tools from './components/Tools';
import Works from './components/Works';

function App() {
  return <>
    <Header />
    <main>
      <Banner />
      <About />
      <Service />
      <Tools />
      <Works />
    </main>
  </>
}

export default App
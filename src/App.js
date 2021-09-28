import React from "react";
import './App.css';
import Header from './components/Header';
import Top from './components/Top';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';
import Greeting from './components/Greeting';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (

    <div>
      <Header />
      <Top />
      <SocialMedia />
      <Greeting />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import ResponsiveLayout from './Components/ResponsiveLayout'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Projects from './Components/Projects'
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <ResponsiveLayout></ResponsiveLayout>
    </div>
  );
}

export default App;

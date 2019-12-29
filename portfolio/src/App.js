import React from 'react';
import './App.css';
import ResponsiveLayout from './Components/ResponsiveLayout'
import Navbar from './Components/Navbar'
import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
        {/* <img className='background' src={require('../src/Components/background.png')} /> */}
      <ResponsiveLayout></ResponsiveLayout>
    </div>
  );
}

export default App;

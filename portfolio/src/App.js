import React from 'react';
import './App.css';
import ResponsiveLayout from './Components/ResponsiveLayout'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ResponsiveLayout></ResponsiveLayout>
    </div>
  );
}

export default App;

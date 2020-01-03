import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css';
import Skills from './Components/Skills'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Projects from './Components/Projects'
import About from './Components/About'
import BottomNav from './Components/BottomNav'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Main /> */}
      {/* <div className='test'> test</div> */}
      <ScrollableAnchor id={'main'} >
        <div className='main'>
          <Main />
        </div>
      </ScrollableAnchor>
      {/* <Navbar /> */}
      <ScrollableAnchor id={'about'} >
        <div>
          <About />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'projects'}>
        <div>
          <Projects />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'skills'}>
        <div>
          <Skills />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'contact'}>
        <div>
          <Contact />
        </div>
      </ScrollableAnchor>
      <BottomNav />
    </div>
  );
}

export default App;

import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css';
import Skills from './Components/Skills'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Projects from './Components/Projects'
import About from './Components/About'
import BottomNav from './Components/BottomNav'
import ResumeSection from './Components/ResumeSection'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Main /> */}
      <ScrollableAnchor id={'main'} >
        <div>
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
      <ScrollableAnchor id={'resume'}>
        <div>
          <ResumeSection />
        </div>
      </ScrollableAnchor>
      <BottomNav />
    </div>
  );
}

export default App;

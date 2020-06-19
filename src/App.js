import React from "react";
import Hero from "./components/hero";
import TwitterContainer from './components/twitter';
import ReactGA from 'react-ga';

function App() {
  initializeReactGA();
  return (
    <div className="flex flex-col w-full my-0">
      <Hero title="Sendu ke?" subtitle="Don't sendu alone my brothers and sisters"/>
      {/* <TwitterContainer/> */}
    </div>
    
    
  );
}

function initializeReactGA() {
  ReactGA.initialize('UA-151328882-1');
  ReactGA.pageview('/homepage');
}

export default App;


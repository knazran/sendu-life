import React from "react";
import Button from "./components/button";
import Hero from "./components/hero";
import Card from "./components/card";
import TwitterContainer from './components/twitter';

function App() {
  return (
    <div className="flex flex-col w-full my-0">
      <Hero title="Sendu ke?" subtitle="Don't sendu alone my brothers and sisters"/>
      <TwitterContainer/>
    </div>
    
    
  );
}

export default App;


import React from "react";
import Button from "./components/button";
import Hero from "./components/hero";
import Card from "./components/card";
import Nav from './components/nav';

function App() {
  return (
    <div className="flex flex-col w-full my-0">
      {/* Nav Card */}
      {/* <div className="absolute p-6 z-100 ">
        <a href="/" className="flex items-center">
            <span className="inline-block text-base font-large ml-2 text-white" >Sendu.Life</span>
        </a>
      </div> */}
      <Hero title="Sendu ke?" subtitle="Don't sendu alone my brothers and sisters"/>
      {/* <Card title="Now Playing" />
      <Button onClick={() => console.log("I was clicked")}>
        Test
      </Button>
      <section class="container mx-auto px-6 p-10">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
      </section> */}
    </div>
    
    
  );
}

export default App;


import React from "react";
import Emoji from "./emoji"
export default function Hero({ props, ...heroProps}) {
  return (
  <div className="py-20 h-screen w-full mb-6" style={{background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}}
    // {...heroProps}
  >
    <div className="container mx-auto px-6">
      <h2 className="text-4xl text-center font-bold mb-2 text-white">
        {heroProps.title} 
        </h2>
      <h3 className="text-2xl text-center mb-8 text-gray-200">
        {heroProps.subtitle}
        </h3>
        <div className="container mb-6">
        <div className="max-w-2xl mx-auto rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    Dengar Lagu Dulu &nbsp; 
                    <Emoji symbol="🎧" label="headphone"/>
                </div>
                <p className="text-gray-700 text-base">
                    Takde lagu yang layan? Click the Spotify icon and add your songs for yourself and others to layan.
              </p>
            </div>
            <div className="px-6 py-4 pt-0">
                <iframe className='w-full h-64' src="https://open.spotify.com/embed/playlist/5EAQqMHYS53OqwBwJTUFzb" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
    </div>
    </div>
  </div>);
}



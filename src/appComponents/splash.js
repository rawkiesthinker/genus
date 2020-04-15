import React, { useState } from 'react';

function Splash() {
  // Declare a new state variable, which we'll call "count"
   const [name] = useState('Wonderland');

  return (
    
    <div className="z-50 absolute w-screen h-screen bg-black">
      <div className="text-white">{name}</div>
    </div>
  );
}

export default Splash;
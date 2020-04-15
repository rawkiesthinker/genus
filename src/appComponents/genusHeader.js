import React, { useState } from 'react';

function GenusHeader() {
  // Declare a new state variable, which we'll call "count"
  const [name] = useState('Wonderland');

  return (
    
    <div className="w-full h-16  bg-black absolute flex justify-center lg:justify-start lg:items-center font-default-black">
      <div className="text-white items-center flex h-8 px-2 text-xl">
       {name}
      </div>
    </div>
  );
}

export default GenusHeader;
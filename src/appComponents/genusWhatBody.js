import React, { useState } from 'react';

function GenusWhatBody(props) {
  // Declare a new state variable, which we'll call "count"
  // const [name, setName] = useState('Wonderland');

  return (
    
    <div className={ " bg-image w-screen h-screen flex justify-center"}>
      <div className="max-w-lg lg:p-24 flex">
        <div className="w-full flex items-center">
          
          <div className="flex-wrap text-center">
            <div className="font-default-bold text-4xl lg:text-6xl">What is Wonderland expeditions</div>
            <div className="font-default-book text-2xl lg:text-3xl">
            Wonderland expedions is a registered member of SATSA,Field Guides Association of Southern Africa
            .Our tour guides are professionally trained and with great experience of leading the tours
            </div>
           </div>
       
        </div>
      </div>
    </div>
  );
}

export default GenusWhatBody;
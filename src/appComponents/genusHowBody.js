import React, { useState } from 'react';

function GenusHowBody(props) {
  // Declare a new state variable, which we'll call "count"
  // const [name, setName] = useState('Wonderland');

  return (
    
    <div className={"bg-image w-screen h-screen flex justify-center"}>
      <div className="w-full lg:p-24 flex">
        <div className="w-full flex items-center">
          
          <div className="flex-wrap text-center">
            <div className="font-default-bold text-3xl lg:text-6xl">How</div>
            <div className="font-default-book text-xl lg:text-3xl">We specialize in small group adventure travel offering the best packages in camping and accommodated safaris</div>
           
           <div className="flex flex-wrap justify-center items-center">
           <a href="#donations" className="bg-black p-2 m-2 text-white rounded">View Packages</a>
           <a href="#donations" className="bg-black p-2 m-2 text-white rounded">Create tailor made tour</a>
           <a href="#donations" className="bg-black p-2 m-2 text-white rounded">Arrange for me to volunteer</a>
          <div className="lg:w-full text-sm ">
             hence one can enjoy our tour and still get involved in volunteering.
             </div>
           </div>


           
           </div>


       
        </div>
      </div>
    </div>
  );
}

export default GenusHowBody;
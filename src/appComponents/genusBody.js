import React, { useState } from 'react';

function GenusBody(props) {
  // Declare a new state variable, which we'll call "count"
  // const [name, setName] = useState('Wonderland');

  return (
    
    <div>
         <div className={" bg-image w-screen h-screen flex justify-center"}>
      <div className="w-full  lg:p-24 flex">
        <div className="w-full flex items-center">
          
          <div className="w-full flex-wrap text-center text-white">
            <div className="font-default-bold text-3xl lg:text-6xl">Why travel with us</div>
            <div className="font-default-book text-xl lg:text-3xl">
              <p className="my-4">
                You travel for a good cause,<br/>
                 a percentage of the booking funds,
                is ploughed back to the conservation of nature.
                </p>

                <a href="#donations" className="bg-black p-2 m-4">Book a tour</a>
            </div>
           </div>
       
        </div>
      </div>
    </div>
  

    <div id="donations" className={"w-full h-64 lg:h-48 p-2 items-center bg-black flex flex-wrap justify-center items-center"}>
    
       <div className="w-full text-center text-white">
       The funds  are used for 
       </div>

       <div className="w-full lg:w-1/2 flex justify-center items-center m-1">

       <div class="w-48 h-24 lg:w-48 lg:h-24 flex justify-center ">
        <img alt="rhino" className="w-24 h-24" src="https://www.savetherhino.org/wp-content/themes/default-theme/images/logo.svg"></img>
       
        </div>
        
        {/* <div class=" h-16 md:h-24 lg:h-24 flex justify-center items-center m-1">
        <img className="w-full " src="http://www.sawrc.org.za/resources/29570796_784549375075850_3345264051599527731_n.jpg"></img>
       </div> */}

       {/* <div class="  h-16 md:h-24 lg:h-24 flex justify-center items-center m-1">
       <img className="w-full " src="https://www.conservationafrica.net/wp-content/themes/v1/images/logo.png"></img>
         </div> */}

         <div class=" h-16 md:h-24 lg:h-24  flex justify-center items-center m-1">
         <img alt="conservation" className="w-48 " src="http://www.moholoholo.co.za/wp-content/uploads/2016/06/logo1.png"></img>
           </div>

    
       </div>
       
       <div className="w-full lg:w-1/2 text-white text-center">
         Depending on the tour one would have a chance to visit the orinisations and centers
       </div>

 

    </div>
  
    </div>
 );
}

export default GenusBody;
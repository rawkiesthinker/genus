import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import GenusHowBody from './genusHowBody';
import GenusBody from './genusBody';
import GenusWhatBody from './genusWhatBody';

function GenusNav() {
  // Declare a new state variable, which we'll call "count"
  // const [name, setName] = useState('Wonderland');

  return (
    <Router>


  
    <div className="w-full justify-center flex p-2 my-8 z-10 absolute font-default-book">
        <div className=" border-green-100 border max-w-sm w-full h-10 shadow-md rounded-full bg-black flex items-center text-white">
        
   
          <div className="w-1/3 flex justify-center"><Link to="/">Why</Link> </div>
          <div className="w-1/3 flex justify-center"><Link to="/how">How</Link> </div>
          <div className="w-1/3 flex justify-center"><Link to="/what">What</Link> </div>
        
      

          </div>
    </div>



<Route path="/" exact component={GenusBody}/>

<Route path="/how" component={GenusHowBody}/>

<Route path="/what" component={GenusWhatBody}/>

</Router>


  );
}



export default GenusNav;
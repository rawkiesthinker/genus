import React, { useState, useEffect } from 'react';
import Splash from './splash';


const Main = (props) => {


const [isLoading, setLoading] =  useState(false);



// Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    
    setInterval(() => onLoad(), 3000);


    const onLoad = () =>{

      setLoading(true);
      clearInterval(this);
  // setLoading(true)
  
}
    
  });



  return (
    <div>
       
       { isLoading ? props.page : <Splash></Splash> }

    </div>




  );
}

export default Main;
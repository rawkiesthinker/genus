import React from 'react';
import './style/styles.css'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GenusHeader from './appComponents/genusHeader';
import GenusNav from './appComponents/genusNav';
import Main from './appComponents/loader';
import GenusBody from './appComponents/genusBody';
import GenusHowBody from './appComponents/genusHowBody';


function App() {
  return (
    <div className="overflow-hidden overflow-y-auto flex flex-wrap h-screen">
      <GenusHeader/>
      <GenusNav/>
    </div>
  );
}

export default App;

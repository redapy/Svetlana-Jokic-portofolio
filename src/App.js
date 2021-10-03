import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
      </Router>
      
    </div>
  );
}

export default App;

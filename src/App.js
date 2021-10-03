import React from 'react';
//Routing
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Components
import Navbar from "./components/navbar/Navbar";
import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <GlobalStyle />
      </Switch>  
     </Router>
      
    
  );
}

export default App;

import React from 'react';
//Routing
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
//Components
import Navbar from "./components/navbar/Navbar";
import Philosophy from './components/philosophy/Philosophy';
import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route  path='/teaching philosophy'>
          <Philosophy />
        </Route>
      </Switch> 
      <GlobalStyle />
     </Router>
      
    
  );
}

export default App;

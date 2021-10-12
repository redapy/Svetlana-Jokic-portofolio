import React from 'react';
//Routing
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Components
import Home from './components/home/Home';
import Id from './components/id/Id';
import LessonPlans from './components/lessonPlans/LessonPlans';
import Philosophy from './components/philosophy/Philosophy';
import ToolBox from './components/toolbox/ToolBox';
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
        <Route  path='/lesson plans and videos'>
          <LessonPlans />
        </Route>
        <Route  path='/toolbox tips'>
          <ToolBox />
        </Route>
        <Route  path='/picture with ID'>
          <Id />
        </Route>
      </Switch> 
      <GlobalStyle />
     </Router>
  );
}

export default App;

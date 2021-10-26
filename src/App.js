import './App.css';
import Maintab from "./Maintab";
import Vertab from './Vertab';
import Bottomp from './Bottomp';
import React,{useState} from 'react';
import Browse from './Browse';
import Charts from './Charts';
import Mplayer from './Mplayer';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
          <Switch>
              <Route path="/mplayer" exact component={Mplayer}/>
          </Switch>
             <Vertab/>
           <div id="navbar"><input type="text" id="searchbar" placeholder="Search" /></div>
         <Switch>  
             <Route path="/" exact component={Maintab}/>
             <Route path="/Browse" exact component={Browse}/>
             <Route path="/Charts" exact 
             component={Charts}/>
         </Switch>    
             <Bottomp/>
            
    </div>
    </Router>
  );
}

export default App;

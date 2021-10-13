import './App.css';
import Maintab from "./Maintab";
import Vertab from './Vertab';
import Bottomp from './Bottomp';
function App() {
  return (
    <div className="App">
             <Vertab/>
           <div id="navbar"><input type="text" id="searchbar" placeholder="Search" /></div>
             <Maintab/>
             <Bottomp/>
    </div>
  );
}

export default App;

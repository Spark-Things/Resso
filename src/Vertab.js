import react,{useState} from 'react';
import heart from './heart.png';
import browse from './arrow.png';
import trophy from './trophy.png';
function Vertab() {
    const [active, setactive] = useState("sp")
  return(
    <div id="verbar">
          <div id="sp">
            <h1 id="Heading"> Spark </h1>
           <a class="sp active" ><img className="micon" src={heart}/>For you</a> 
           <a class="sp" ><img className="micon" src={browse}/>Browse</a>
           <a class="sp" ><img className="micon" src={trophy}/>Charts</a>
         </div> 
        <div id="second">
            <span className="vname">My library</span>
              <a class="second">Favorite songs</a>
              <a class="second">Artist</a>
              <a class="second">Album</a>
              <a class="second">History</a>
        </div> 
             <div id="playlist">
               <span className="vname">My Playlist</span>
               </div>
          </div>   
  )
}
export default Vertab;
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
            <span className="vname"><b>My library</b></span>
              <a class="second"><b>Favorite songs</b></a>
              <a class="second"><b>Artist</b></a>
              <a class="second"><b>Album</b></a>
              <a class="second"><b>History</b></a>
        </div> 
             <div id="playlist">
               <span className="vname"><b>My Playlist</b></span>
               </div>
          </div>   
  )
}
export default Vertab;
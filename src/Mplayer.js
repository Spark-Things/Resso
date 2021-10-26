import './Mplayer.css';
import { Link } from 'react-router-dom';
import dn from './dn.png';
import like from './like.png';
import downlord from './download.png';
import share from './share.png';
import more from './more.png';
function Mplayer(){
  return(
    <div id="mplayer">
        <div>
          <Link to="/">
           <button id="dbtn"><img src={dn} id="dnarrow"/></button>
           </Link>
        </div>
      <div id="lepcontainer">
       <div id="imgcontainer">
          <img alt="img"/>
       </div>
           <h1>Song Name</h1>
           <h3>Singer Name</h3>
        <div>
           <img src={like} className="btnss"></img> 
           <img src={downlord} className="btnss"></img> 
           <img src={share} className="btnss"></img> 
           <img src={more} className="btnss"></img> 
        </div> 
      </div>
      <div id="lyricscontainer">

        </div>    
    </div>
  )
}
export default Mplayer;
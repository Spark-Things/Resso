import react,{useState} from 'react';
import heart from './heart.png';
import browse from './arrow.png';
import trophy from './trophy.png';
import {Link } from 'react-router-dom';
function Vertab() {
  const[value,setValue] = useState(1);
  const className={
    className:"sp",
  }
  const className2={
    className:"sp",
  }
  const className3={
    className:"sp",
  }
  if(value ==1){
      className.className = "sp active";
      className2.className =" sp";
      className3.className = "sp"
  }
  if(value == 2){
      className.className = "sp ";
      className2.className =" sp active";
      className3.className = "sp"
  }
  if(value == 3){
    className.className = "sp ";
    className2.className =" sp ";
    className3.className = "sp active"
  }
  console.log(value);
  return(
    <div id="verbar">
          <div id="sp">
            <h1 id="Heading"> Spark </h1>
            <Link to="/">
           <a class={className.className} onClick={()=>setValue(1)}><img className="micon" src={heart}/>For you</a> </Link>
           <Link to="/Browse">
           <a class={className2.className}  onClick={()=>setValue(2)}><img className="micon" src={browse}/>Browse</a></Link>
           <Link to="/Charts">
           <a class={className3.className}  onClick={()=>setValue(3)}><img className="micon" src={trophy}/>Charts</a> </Link>
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
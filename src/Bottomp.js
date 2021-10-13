import './Bottomp.css'
import playbutton from './play.png';
import next from './next.png';
import pre from './previous.png';
function Bottomp() {
  return(
     <div id="btm">
         <div id="plyer">
              <div id="controls">
              <div id="dicont"> 
              <p className="discp"><b>Nme</b></p><br/>
              <p className="discp">Here is a discription</p>
              </div>
              <div id="mdcont">
                 <img className="btns bop" src={next}/>
                 <img className="btns" src={playbutton}/>
                 <img className="btns bop" src={pre}/>
              </div>
              <div id="rcontrols">

              </div>
              <input type="range" max="100%" min="0" id="songrange"/>
              </div>
         </div>
            <div id="pcont">
            <img alt="Image here" id="cthumb"/>
            </div>
     </div>
  )
}
export default Bottomp;
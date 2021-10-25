import './Bottomp.css'
import playbutton from './play.png';
import next from './next.png';
import pre from './previous.png';
import pt1 from './pt1.jpg';
function Bottomp() {
  return(
     <div id="btm">
         <div id="plyer">
              <div id="controls">
              <div id="dicont"> 
              <p className="discp"><b>Arcade</b></p><br/>
              <p className="discp"> Duncan Laurence</p>
              </div>
              <div id="mdcont">
                 <img className="btns bop" src={next}/>
                 <img className="btns" src={playbutton}/>
                 <img className="btns bop" src={pre}/>
              </div>
              <div id="rcontrols">
                    <p>02:30/05:00</p>
              </div>
              <input type="range" max="100%" min="0" id="songrange"/>
              </div>
         </div>
            <div id="pcont">
            <img alt="Image here" id="cthumb" className="img" src={pt1}/>
            </div>
     </div>
  )
}
export default Bottomp;
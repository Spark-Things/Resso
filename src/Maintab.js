import React,{ useState } from 'react';
import './Maintab.css';
import Subcontainer from './Subcontainer';
import Subcontainer2 from './Subcontainer2';
import Tablerow from './Tablerow';
import left from './left.png';
import right from './right.png';
import t1 from './t1.jpg';
import t2 from './t2.jpg';
import t3 from './t3.jpg';
import t4 from './t4.jpg';
import t5 from './t5.jpg';
import t6 from './t6.jpg';
import pt1 from './pt1.jpg';
import pt2 from './pt2.jpg';
import pt3 from './pt3.jpg';
import pt4 from './pt4.jpg';
function Maintab() {
  const state={
    greet:"Hello spark"
  }
  var d = new Date();
  const time = d.getHours();
   if(time>=6 && time<12){
     state.greet="Good Morning";
   }
   if(time>=12 && time<17){
     state.greet="Good Afternoon";
   }
   if(time>=17 && time<=24){
     state.greet="Good Evening";
 }
 if(time>=1 && time<=6){
  state.greet="Good night";
}
    const style={
      display:""
    }
    const sty2={
      display:""
    }
    const sty3={
      display:""
    }
    const sty4={
      display:""
    }
    const sty5={
      display:""
    }
    const sty6={
      display:""
    }
   const[plus,setPlus] = useState(0);
   const[minus,setMinus] = useState(0)
   const[tabslide,setTabslide] = useState(0);
     if(plus == 1){
         sty2.display= "block";
         style.display="none"
     }
     if(plus== 0){
          style.display="block";
          sty2.display="none";
     }
     if(minus == 0){
        sty3.display="block";
        sty4.display="none";
     }
     if(minus == 1){
        sty4.display="block";
        sty3.display="none";
     }
     if(tabslide == 0){
       sty5.display="block";
       sty6.display="none"
     }
     if(tabslide == 1){
       sty6.display="block";
       sty5.display="none";
     }
   const istyle={
    borderRadius:" 10px 0px 0px 0px "
   }
   const istyle2={
     borderRadius:"0px 0px 0px 10px"
   }  
  return(
    <div id="maintab">
         <h1 id="demo">{state.greet}</h1>
    <div class="containertwo">
         <div id="imgc">
               <img className="img" src={pt1} style={istyle}/>
               <img className="img" src={pt2}/>
               <img className="img" src={pt3} style={istyle2}/>
               <img className="img" src={pt4}/>
              </div>
     <div id="Dm">
           <p id="mname"><b>Your Daily Mix</b></p>
           <span id="discp">HERE is A description</span>
           <button id="mbtn"><b>PLAY</b></button>
     </div>
 </div> 
      <div class="containera">
              <h2>New Releases</h2>
              <img src={t2} className="imgs"/>
              <img src={t3} className="img2"/>
              <img src={t4} className="imgs"/>
              </div>
      <div class="container3">
        <h2>Suggested Radios</h2>
        <button class="navigetor"onClick={()=>setPlus(0)}><img src={left} id="left"/></button>
        <div class="slides1" style={style}>
            <Subcontainer thumbnail={t1} Sname="Hip-hop songs"/>
            <Subcontainer thumbnail={t2} Sname="Trap Music "/>
            <Subcontainer thumbnail={t3} Sname="Rap Trap"/>
            <Subcontainer thumbnail={t4} Sname="Party Music"/>
            <Subcontainer thumbnail={t5} Sname="Love Mashup 2020"/>
            <Subcontainer thumbnail={t6} Sname="Love Mashup 2019"/>
        </div> 
        <div class="slides1" style={sty2}>
           <Subcontainer2 thumbnail={t6} Sname="Love Mashup 2019"/>
           <Subcontainer2 thumbnail={t5} Sname="Love Mashup 2020"/>
           <Subcontainer2 thumbnail={t4} Sname="Party Music"/>
           <Subcontainer2 thumbnail={t3} Sname="Rap Trap"/>
           <Subcontainer2 thumbnail={t2} Sname="Trap Music "/>
           <Subcontainer2 thumbnail={t1} Sname="Hip-hop songs"/>
         </div>  
         <button class="navigetor"onClick={()=>setPlus(1)}><img src={right} id="left"/></button> 
        </div>

        <div class="container3">
        <h2>Songs You May Like </h2>
        <button class="navigetor"onClick={()=>setMinus(0)}><img src={left} id="left"/></button>
        <div class="slides2" style={sty3}>
            <Subcontainer thumbnail={t6} Sname="Love Mashup 2019"/>
            <Subcontainer thumbnail={t5} Sname="Love Mashup 2020"/>
            <Subcontainer thumbnail={t4} Sname="Party Music"/>
            <Subcontainer thumbnail={t3} Sname="Rap Trap"/>
            <Subcontainer thumbnail={t2} Sname="Trap Music "/>
            <Subcontainer thumbnail={t1} Sname="Hip-hop songs"/>
        </div> 
        <div className="slides2" style={sty4}>
            <Subcontainer2 thumbnail={t1} Sname="Hip-hop songs"/>
            <Subcontainer2 thumbnail={t2} Sname="Trap Music "/>
            <Subcontainer2 thumbnail={t3} Sname="Rap Trap"/>
            <Subcontainer2 thumbnail={t4} Sname="Party Music"/>
            <Subcontainer2 thumbnail={t5} Sname="Love Mashup 2020"/>
            <Subcontainer2 thumbnail={t6} Sname="Love Mashup 2019"/>
         </div>
         <button class="navigetor"onClick={()=>setMinus(1)}><img src={right} id="left"/></button>
      </div> 

      <div class="container4">
           <h2>Popular Hits </h2>
      <button class="navigetort"onClick={()=>setTabslide(0)}><img src={left} id="tabnav"/></button>
        <div className="slide 1" style={sty5}>
             <table>
                  <Tablerow thumbnail={pt1}/>
                  <Tablerow thumbnail={pt2}/>
                  <Tablerow thumbnail={pt4}/>
             </table>
        </div> 
        <div className="slide 1" style={sty6} >
             <table>
                  <Tablerow thumbnail={pt2}/>
                  <Tablerow thumbnail={pt3}/>
                  <Tablerow thumbnail={pt1}/>
             </table>
        </div>    
      <button class="navigetort"onClick={()=>setTabslide(1)}><img src={right} id="tabnav"/></button>        
           </div>
     <div class="container3"> 
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div>
      </div>
      <div class="lastcontainer"> 
           <p> Refresh to get new Music </p>
           <button id="rb">Refresh</button>
      </div>      
</div>
  )  
  }
export default Maintab;
  

import React,{ useState } from 'react';
import './Maintab.css';
import Subcontainer from './Subcontainer';
import Subcontainer2 from './Subcontainer2';
import Tablerow from './Tablerow';
import left from './left.png';
import right from './right.png';
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
  return(
    <div id="maintab">
         <h1 id="demo">{state.greet}</h1>
    <div class="containertwo">
         <div id="imgc">
               <img className="img"/>
               <img className="img"/>
               <img className="img"/>
               <img className="img"/>
              </div>
     <div id="Dm">
           <h2>Your Daily Mix</h2>
           <span id="discp">HERE is A description</span>
     </div>
 </div> 
      <div class="containera">
              <h2>New Releases</h2>
              </div>
     <div class="container3"> 
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div>
      </div>
      <div class="container3">
        <h2>Suggested Radios</h2>
        <button class="navigetor"onClick={()=>setPlus(0)}><img src={left} id="left"/></button>
        <div class="slides1" style={style}>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
        </div> 
        <div class="slides1" style={sty2}>
           <Subcontainer2/>
           <Subcontainer2/>
           <Subcontainer2/>
           <Subcontainer2/>
           <Subcontainer2/>
           <Subcontainer2/>
         </div>  
         <button class="navigetor"onClick={()=>setPlus(1)}><img src={right} id="left"/></button> 
        </div>

        <div class="container3">
        <h2>Songs You May Like </h2>
        <button class="navigetor"onClick={()=>setMinus(0)}><img src={left} id="left"/></button>
        <div class="slides2" style={sty3}>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
        </div> 
        <div className="slides2" style={sty4}>
          <Subcontainer2/>
          <Subcontainer2/>
          <Subcontainer2/>
          <Subcontainer2/>
          <Subcontainer2/>
          <Subcontainer2/>
         </div>
         <button class="navigetor"onClick={()=>setMinus(1)}><img src={right} id="left"/></button>
      </div> 

      <div class="container4">
           <h2>Popular Hits </h2>
      <button class="navigetort"onClick={()=>setTabslide(0)}><img src={left} id="tabnav"/></button>
        <div className="slide 1" style={sty5}>
             <table>
                  <Tablerow/>
                  <Tablerow/>
                  <Tablerow/>
             </table>
        </div> 
        <div className="slide 1" style={sty6} >
             <table>
                  <Tablerow/>
                  <Tablerow/>
                  <Tablerow/>
                  <p>table 2</p>
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
</div>
  )  
  }
export default Maintab;
  

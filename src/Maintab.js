import React,{ useState } from 'react';
import './Maintab.css';
import Subcontainer from './Subcontainer';
import Subcontainer2 from './Subcontainer2';
import Tablerow from './Tablerow';
function Maintab() {
  const state={
    greet:"Hello spark"
  }
  var d = new Date();
  const time = d.getHours();
   if(time>6 && time<12){
     state.greet="Good Morning";
   }
   if(time>12 && time<17){
     state.greet="Good Afternoon";
   }
   if(time>=17 && time<=24){
     state.greet="Good Evening";
 }
    const style={
      display:""
    }
    const sty2={
      display:"none"
    }
    const sty3={
      display:""
    }
    const sty4={
      display:""
    }
   const[plus,setPlus] = useState(0);
   const[minus,setMinus] = useState(0)
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
     console.log(plus);
     console.log(style.display);
  return(
    <div id="maintab">
         <h1 id="demo">{state.greet}</h1>
    <div class="containertwo">
         <div id="imgc">
               <img/><img/><img/><img/>
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
      <div class="container"></div></div>
      <div class="container3">
        <h2>Suggested Radios</h2>
        <button class="navigetor"onClick={()=>setPlus(0)}>L</button>
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
         <button class="navigetor"onClick={()=>setPlus(1)}>R</button> 
        </div>

        <div class="container3">
        <h2>Songs You May Like </h2>
        <button class="navigetor"onClick={()=>setMinus(0)}>L</button>
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
         <button class="navigetor"onClick={()=>setMinus(1)}>R</button>
      </div> 

      <div class="container4">
           <h2>Popular Hits </h2>
             <table>
                  <Tablerow/>
                  <Tablerow/>
                  <Tablerow/>
             </table>
           </div>
</div>
  )  
  }
export default Maintab;
  

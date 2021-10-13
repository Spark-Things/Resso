import React from 'react';
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
   if(time>17 && time<24){
     state.greet="Good Evening";
   }
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
          <p>Hello from Line 17</p>
      </div>
     <div class="container3"> 
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div>
      <div class="container"></div></div>
      <div class="container3">
        <h2>Suggested Radios</h2>
        <div class="slides1">
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
        </div> 
        <div class="slides1">
         </div>  
        </div>

        <div class="container3">
        <h2>Songs You May Like </h2>
        <div class="slides2">
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
            <Subcontainer/>
        </div> 
        <div className="slides2">
         </div>
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
  

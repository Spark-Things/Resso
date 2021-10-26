import './Charts.css';
import t5 from './t5.jpg';

function Charts() {
  return(
    <div id="Chartstab">
      <h1 className="tname" >Charts</h1>
      <div id="content">
         <div id="navc">
           <a className="ctabs"><b>All</b></a>
           <a className="ctabs"><b>Hindi</b></a>
           <a className="ctabs"><b>English</b></a>
           <a className="ctabs"><b>Panjabi</b></a>
           <a className="ctabs"><b>Telugu</b></a>
           <a className="ctabs"><b>Tamil</b></a>
           <a className="ctabs"><b>Malayalam</b></a>
           <a className="ctabs"><b>Kannada</b></a>
         </div>
         <div className="ccontainer">
             <img alt="img here" src={t5} className="cthumbnail"/>
             <table id="ctable">
               <tr className="ctr">
                  <td className="left"><b>1 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>2 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>3 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>4 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>5 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
             </table>
              <a id="cva"><b>View All</b></a>
         </div>
         <div className="ccontainer">
             <img alt="img here" src={t5} className="cthumbnail"/>
             <table id="ctable">
               <tr className="ctr">
                  <td className="left"><b>1 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>2 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>3 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>4 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>5 Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
             </table>
             <a id="cva"><b>View All</b></a>
         </div>
         <div className="ccontainer">
             <img alt="img here" src={t5} className="cthumbnail"/>
             <table id="ctable">
               <tr className="ctr">
                  <td className="left"><b>1   Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>2   Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>3   Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>4   Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
               <tr className="ctr">
               <td className="left"><b>5   Whoophy (Remix)</b></td>
                  <td className="center"><b> Whoophy (Remix)</b></td>
                  <td className="right">smit</td>
               </tr>
             </table>
             <a id="cva"><b>View All</b></a>
         </div>
      </div>
    </div>
  )
}
export default Charts;
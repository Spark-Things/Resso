function Tablerow() {
  return(
    <tr>
    <td class="tablecontent">
       <img alt="images" className="timage"/>
       <div className="tabd">
          table column 1 
       </div>
    </td>
    <td class="tablecontent">
    <img alt="images" className="timage"/>
     <div className="tabd">
        Table column 2
     </div>
    </td>
    <td class="tablecontent">
    <img alt="images" className="timage"/>
     <div className="tabd">
          <span><b>Table column 3</b></span>
     </div>
    </td>
 </tr>
  )
}
export default Tablerow;
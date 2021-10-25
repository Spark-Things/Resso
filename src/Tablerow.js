function Tablerow(props) {
  return(
    <tr>
    <td class="tablecontent">
       <img alt="images" className="timage" src={props.thumbnail}/>
       <div className="tabd">
          <p className="sngname">table column 1 </p>
          <p className="sn">Singers Name</p>
       </div>
    </td>
    <td class="tablecontent">
    <img alt="images" className="timage" src={props.thumbnail}/>
    <div className="tabd">
          <p className="sngname">table column 1 </p>
          <p className="sn">Singers Name</p>
       </div>
    </td>
    <td class="tablecontent">
    <img alt="images" className="timage" src={props.thumbnail}/>
    <div className="tabd">
          <p className="sngname">table column 1 </p>
          <p className="sn">Singers Name</p>
       </div>
    </td>
 </tr>
  )
}
export default Tablerow;

function Subcontainer2(props) {
  return (
  <div class="subcontainer2">
       <img alt="img" className="thumbnail" src={props.thumbnail}/>
       <p className="songd">{props.Sname}</p>
  </div>
  )
}
export default Subcontainer2;
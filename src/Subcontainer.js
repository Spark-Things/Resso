
function Subcontainer(props) {
  return (
  <div class="subcontainer">
       <img alt="img" className="thumbnail" src={props.thumbnail}/>
       <p className="songd"><b>{props.Sname}</b></p>
  </div>
  )
}
export default Subcontainer;
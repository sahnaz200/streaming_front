import {
    Link
  } from "react-router-dom";

function NabBar(){
    return(
    <nav class="navbar navbar-light my-3" >
        <Link to="/" className="text-decoration-none"><div class="text-white px-4" style={{border: "2px solid white", borderRadius: ".5rem", fontWeight:"700", fontSize: "25px"}}>
        My videos
        </div></Link>
    </nav>
  )
}
export default NabBar

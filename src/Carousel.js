import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import {
    Link
  } from "react-router-dom";
var carouselStyle = {
    height: "400px",
    borderRadius: ".4rem"
}

function Carousel(props){
    
    var count=0
    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style={{marginBottom: "40px"}}>
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">

                {props.videos?.length >0 && props.videos.map((each,index) => {

                        if(count<=4 && each.split('.').pop() == 'mp4'){
                            count++
                            return(
                                <div class={count == 1 ? "carousel-item active" : "carousel-item"} style={{backgroundColor: "rgb(48 38 75)", borderRadius: ".4rem"}}>
                                    <img src={"https://sahnazstreamingbackend.herokuapp.com/api/playvideo?filename=" + each.split('.').slice(0, -1).join('.') + '.jpg'} class="d-block w-100" alt="..." style={carouselStyle} />
                                    <div class="carousel-caption d-none d-md-block text-left">
                                        
                                    <Link to={'/play/'+ each} className="text-decoration-none">
                                        <button type="button" class="btn btn-info play_vd_btn">
                                            <span style={{border: "1px solid", borderRadius: "50%", padding: "0px 6px 3px 8px", backgroundColor: "#0f0f0f36"}}>
                                                <FontAwesomeIcon style={{fontSize: "10px"}} icon={faPlay} />
                                            </span>
                                            <span className="pl-2" style={{paddingTop: "10px"}}>PLAY</span>
                                        </button>
                                    </Link>
                                    </div>
                                </div>
                            )
                        }
                        
                    })}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div> 

    )
}

export default Carousel;



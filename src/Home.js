
import axios from "axios"
import React, {useState, useEffect} from 'react';
import Spinner from 'react-spinner-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Carousel from './Carousel'
import {
    Link
  } from "react-router-dom";

function Home(){
    let apiurl ="https://sahnazstreamingbackend.herokuapp.com/api/allassets"
    var [videos,setVideos]=useState([]);  
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios({
            url:apiurl,
            method:"get"
        }).then((response)=>{
            setVideos(response.data.videos)
            setLoading(false);
            
        }, (error)=>{
            console.log("error from vd api : ",error)
            setLoading(false);
        })
    },[])
    
    return(
        loading ? 
            <div className="spinner-extra-style">
                <Spinner radius={150} color={"rgb(221 173 37 / 80%)"} stroke={12} visible={true} />
            </div>
           :
            <React.Fragment>
                <Carousel videos={videos}/>
                <div className="row text-center">
                    {videos?.length >0 && videos.map((each,index) => {
                        if(each.split('.').pop() == 'mp4'){
                            return(
                                <div className="col-sm-3 mb-3" key={index}>
                                    <Link to={'/play/'+ each}>
                                        <div class="card img-hover-zoom" style={{border: "0px", borderRadius: ".4rem", backgroundColor: "rgb(48 38 75)"}}>
                                            <img className="home_vds" src={"https://sahnazstreamingbackend.herokuapp.com/api/playvideo?filename=" + each.split('.').slice(0, -1).join('.') + '.jpg'} alt="..." />
                                            <div class="card-body home_vd_text">
                                                <p class="card-text" style={{paddingLeft:"10px", fontWeight: "500", color: "white"}}><FontAwesomeIcon icon={faPlay} /> <span style={{paddingLeft:"10px"}}>{each.split('.').slice(0, -1).join('.')}</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </div>
                
            </React.Fragment>
    )
}

export default Home
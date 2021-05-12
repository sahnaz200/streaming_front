import { useParams } from "react-router-dom";
import React from 'react';
import ReactPlayer from 'react-player'
function Player(){
    let params = useParams()
    return(
        <div>
            <div style={{display: "flex", justifyContent:"center"}}>
                <ReactPlayer 
                width="1200px" 
                height="600px" 
                controls 
                playing="true"
                url={"https://sahnazstreamingbackend.herokuapp.com/api/playvideo?filename="+params.filename}
                />
            </div>
            <h3 className="text-white pt-4 pb-3">{params.filename.split('.').slice(0, -1).join('.')}</h3>
        </div>
    )
}

export default Player

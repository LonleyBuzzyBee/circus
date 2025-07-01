import React from "react";
import { useMediaQuery } from 'react-responsive';
import re from  "../../assets/images/performing-reel.mov"
import reel from  "../../assets/images/performing-reel-mobile.mov"

const Performer_reel = () =>{

    // const isMobile = useMediaQuery({ query: '(max-width: 768px)'});
    // const videoSrc = isMobile ? reel_mobile : reel;

    return(
        <div className="performer-reel-vid-row">
            <div className="performer-reel-vid-col1">
                <video src={reel}  controls="controls" autoPlay="true"/>
                {/* <video src={reel}  controls="controls" autoPlay="true"/> */}
            </div>
            <div className="performer-reel-vid-col2">
                <div className="performer-reel-description">
                    <h3>Performing Reel</h3>
                    <p>A creative lyra act I choreographed in February — featuring acro elements, light contortion, and fluid transitions in the air.</p><br/><p>If you'd like to check out anymore training videos or some performance content check out my gallery page.</p>
                </div>
            </div>
        </div>
    );
}; export default Performer_reel;
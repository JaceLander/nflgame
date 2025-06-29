import React from "react";
import video from "../assets/FootageBRollNFL.mp4"

function Main(){
    return (
        <div className="App">
            <video src={video} autoPlay loop muted className="background"/>
        </div>
    );
}

export default Main;
import React from "react";
import video from "../assets/FootageBRollNFL.mp4"
import Dropdown from 'react-bootstrap/Dropdown'
import guessResponse from './mainSelect'

function Main(){
    return (
        <div className="App">
        <div className="overlay"></div>
            <video src={video} autoPlay loop muted/>
            <div className="game">
                <h1 className="title"> </h1>


            </div>
        </div>
    );
}

export default Main;
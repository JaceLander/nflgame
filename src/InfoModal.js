import React from "react";
import "./Modal.css";
import "./App.css"

function Modal({setOpen}){

    return(
            <div className="info-overlay">
            <div className="modal">
            <button className="exit" onClick={setOpen}>✖
            </button>
            <div className="modal-item">
            <div className="text modal-item title-font">Welcome to NFLdle! </div>
            <div className="text modal-item font">NFLdle is a Wordle-like game which focuses on active NFL
            players and tasks you with finding the secret NFL player through trial and error.</div>
            <div className="text modal-item font">Examples</div>
            <div className="row">
                <div className="example incorrect font">Wrong/Far away</div>
                <div className="example close font">Close to value/right side of ball/right division</div>
                <div className="example correct font">Correct!</div>
            </div>
            <div className="text modal-item font">The player changes upon reload of the page, but a daily mode is soon to come!</div>
            <div className="text modal-item small-font">Site created by Jace Lander</div>
            <div className="text modal-item small-font">Want to see more from me? Check out</div>
            </div>
            </div>
            </div>

    )

}
export default Modal;
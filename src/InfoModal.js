import React from "react";
import "./Modal.css";

function Modal({setOpen}){

    return(
            <div className="info-overlay">
            <div className="modal"></div>
            <button onClick={setOpen}>exit</button>
            </div>

    )

}
export default Modal;
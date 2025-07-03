import React, { useState, useEffect} from "react";
import "./Modal.css";
import "./App.css"

function WinModal({setOpen, guessNum}){
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true);
    }, []);
  
    return (
      <div className={`info-overlay ${visible ? "show" : "exit"}`}>
            <div className={`modal ${visible ? "show" : "exit"}`}>
            <div className="modal-item">
            <div className="text modal-item title-font">Congratulations! </div>
            <div className="text modal-item font">You have completed today's NFLdle in {guessNum} guesses!</div>
            <button className="button start-button game-font" onClick={setOpen}>Okay</button>
            <div className="text modal-item small-font font">A site created by Jace Lander</div>
            <div className="text modal-item small-font font">Want to see more from me? Go to jacelander.com!</div>
            </div>
            </div>
            </div>

    )

}
export default WinModal;
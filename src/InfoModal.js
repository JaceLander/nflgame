import React, { useState, useEffect} from "react";
import "./Modal.css";
import "./App.css"

function Modal({setOpen}){
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true);
    }, []);
  
    return (
      <div className={`info-overlay ${visible ? "show" : "exit"}`}>
            <div className={`modal ${visible ? "show" : "exit"}`}>
            <div className="modal-item">
            <div className="text modal-item title-font">Welcome to NFLdle! </div>
            <div className="text modal-item font">NFLdle is a Wordle-like game which focuses on active NFL
            players and tasks you with finding the secret NFL player through trial and error.</div>
            <div className="text modal-item font">Examples</div>
            <div className="row">
                <div className="example incorrect-modal font">Wrong/Far away</div>
                <div className="example close-modal font">Close to value/right side of ball/right division</div>
                <div className="example correct-modal font">Correct!</div>
            </div>
            <div className="text modal-item font">Each box corresponds to a different player metric and arrows state the direction of the correct value.</div>
            <div className="text modal-item font">A randomly generated mode will be in the works soon! Thanks for playing!</div>
            <button className="button start-button game-font" onClick={setOpen}>Let's Start!
            </button>
            <div className="text modal-item small-font font space">Please note: certain features will not work if using iPhones on low power mode</div>
            <div className="text modal-item small-font font">A site created by Jace Lander</div>
            <div className="text modal-item small-font font">Want to see more from me? Go to jacelander.com!</div>
            </div>
            </div>
            </div>

    )

}
export default Modal;
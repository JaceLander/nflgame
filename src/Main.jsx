import React, { useEffect, useState } from "react";
import video from "./footballBRollNFL.mp4";
import { fetchPlayers } from './PlayerList';
import selection from "./Selection";
import response from "./Response";
import Modal from "./InfoModal";


function Main() {
  const [guess, setGuess] = useState('');
  const [activePlayers, setActivePlayers] = useState([]);
  const [returnedDiv, setReturnedDiv] = useState(<></>);
  const [responseDiv, setResponseDiv] = useState(<></>);
  const [guessedPlayers, setGuessedPlayers] = useState([]);
  const [openModal, setOpenModal] = useState([]);



  useEffect(() => {
    async function loadPlayers() {
      const players = await fetchPlayers();
      const active = Array.isArray(players) ? players.filter(p => p.Status === 'Active') : [];
      setActivePlayers(active);
    }
    loadPlayers();
  }, []);

var correctPlayer = (activePlayers.filter(player => player.Name === "Trey Hendrickson")[0]);

function setName(e){
  setGuess(e.target.value);
}

function addGuess(){
  if(activePlayers.filter(player => player.Name === guess).length !== 0 && !guessedPlayers.includes(guess)){
  guessedPlayers.push(guess);
  setGuessedPlayers(guessedPlayers);
  }
}



  function handleChange(e) {
    setGuess(e.target.value);
  }
  useEffect(() => {
    setReturnedDiv(selection(activePlayers, guess, setName));
  }, [activePlayers, guess]);

function responses() {

  addGuess();
  setResponseDiv(response(correctPlayer, guessedPlayers, activePlayers));
}


  return (
    <div>
    <div className="App">
    <video 
      className={"video"} 
      src={video} 
      autoPlay 
      playsInline 
      loop 
      muted />
      <div className="overlay"></div>
      <button 
        className="info rise" 
        onClick={() => {setOpenModal(true);
        }}
        >ⓘ</button>

      <div className="game game-font">
        <h1 className="title">NFLdle</h1>
        <p className="title space">Guess the active NFL player</p>
        <input className='textbox game-font' type="text" value={guess} onChange={handleChange} />
        <div className="box game-font mask1">{returnedDiv}</div>
      </div>
        <input type="button" className="button game-font" value="Submit" onClick={responses}/>
        
    </div>
    <div className="header-container response-font">
        <div className="response-header">Name</div>
        <div className="response-header">Team</div>
        <div className="response-header">Age</div>
        <div className="response-header">Weight</div>
        <div className="response-header">Position</div>
    </div>
    <div className="response-font">{responseDiv}</div>
    {openModal && <Modal setOpen={() => setOpenModal(false)}/>}
    </div>
    
  );
}

export default Main;
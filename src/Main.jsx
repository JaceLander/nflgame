import React, { useEffect, useState } from "react";
import video from "./FootageBRollNFL.mp4";
import Dropdown from 'react-bootstrap/Dropdown';
import GuessResponse from './mainSelect';
import { fetchPlayers } from './PlayerList';
import mainSelect from "./mainSelect";
import selection from "./Selection";
import response from "./Response";

function Main() {
  const [guess, setGuess] = useState('');
  const [activePlayers, setActivePlayers] = useState([]);
  const [returnedDiv, setReturnedDiv] = useState(<></>);
  const [responseDiv, setResponseDiv] = useState(<></>);
  const [guessedPlayers, setGuessedPlayers] = useState([]);
  
  useEffect(() => {
    async function loadPlayers() {
      const players = await fetchPlayers();
      const active = Array.isArray(players) ? players.filter(p => p.Status === 'Active') : [];
      setActivePlayers(active);
    }
    loadPlayers();
  }, []);

var correctPlayer = activePlayers[0];

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
    <div className="App">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="game">
        <h1 className="title">NFLdle</h1>
        <p className="title">Guess the active NFL player</p>
        <input type="text" value={guess} onChange={handleChange} />
        <div className="box">{returnedDiv}</div>
      </div>
        <input type="button" className="button" value="Submit" onClick={responses}/>
        <div className="box">{responseDiv}</div>
    </div>
  );
}

export default Main;
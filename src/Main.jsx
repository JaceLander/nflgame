import React, { useEffect, useState } from "react";
import video from "./FootageBRollNFL.mp4";
import Dropdown from 'react-bootstrap/Dropdown';
import GuessResponse from './mainSelect';
import { fetchPlayers } from './PlayerList';
import mainSelect from "./mainSelect";
import selection from "./Selection";

function Main() {
  const [guess, setGuess] = useState('');
  const [activePlayers, setActivePlayers] = useState([]);
  const [returnedDiv, setReturnedDiv] = useState(<></>);

function setName(e){
  setGuess(e.target.value);
}

  useEffect(() => {
    async function loadPlayers() {
      const players = await fetchPlayers();
      const active = Array.isArray(players) ? players.filter(p => p.Status === 'Active') : [];
      setActivePlayers(active);
    }
    loadPlayers();
  }, []);

  function handleChange(e) {
    setGuess(e.target.value);
  }
  useEffect(() => {
    setReturnedDiv(selection(activePlayers, guess, setName));
}, [activePlayers, guess]);


  return (
    <div className="App">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="game">
        <h1 className="title">NFLdle</h1>
        <p className="title">Guess the active NFL player</p>
        <input type="text" value={guess} onChange={handleChange} />
        <div className="box">{returnedDiv}</div>
        <input type="button" value="Submit" />
      </div>
    </div>
  );
}

export default Main;
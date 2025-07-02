import React from "react";
const divisions = [
  ["BUF", "MIA", "NE", "NYJ"],     // AFC East
  ["BAL", "CIN", "CLE", "PIT"],    // AFC North
  ["HOU", "IND", "JAX", "TEN"],    // AFC South
  ["DEN", "KC", "LV", "LAC"],      // AFC West
  ["DAL", "NYG", "PHI", "WSH"],    // NFC East
  ["CHI", "DET", "GB", "MIN"],     // NFC North
  ["ATL", "CAR", "NO", "TB"],      // NFC South
  ["ARI", "LAR", "SF", "SEA"]      // NFC West
];

const offensivePositions = [
  "QB",  // Quarterback
  "RB",  // Running Back (includes HB, TB)
  "TB",
  "HB",
  "FB",  // Fullback
  "WR",  // Wide Receiver
  "TE",  // Tight End
  "LT",  // Left Tackle
  "LG",  // Left Guard
  "C",
  "G",   // Center
  "RG",  // Right Guard
  "RT",  // Right Tackle
  "OL"   // Offensive Lineman (general, often used when specific isn't given)
];

const defensivePositions = [
  "DE",    // Defensive End
  "DT",    // Defensive Tackle
  "NT",    // Nose Tackle
  "EDGE",  // Edge Rusher (DE/OLB hybrid)
  "LB",    // Linebacker
  "OLB",   // Outside Linebacker
  "ILB",   // Inside Linebacker
  "MLB",   // Middle Linebacker
  "CB",    // Cornerback
  "FS",    // Free Safety
  "SS",    // Strong Safety
  "S",     // Generic Safety (can mean FS or SS)
  "DB",    // Defensive Back (generic for CB/S)
  "DL"     // Defensive Lineman (generic for DE/DT/NT)
];

function detectSameDivision(team1,team2){
for(var i=0; i<divisions.length; i++){
  if(divisions[i].includes(team1) && divisions[i].includes(team2)){
    return true;
  }
}
return false;
}

function detectSameSide(team1,team2){
    if(offensivePositions.includes(team1) && offensivePositions.includes(team2)){
      return true;
    }else if(defensivePositions.includes(team1) && defensivePositions.includes(team2)){
      return true;
    }else{
  return false;
    }
  }

// function parseHeight(heightStr) {
//   const [feetStr, inchesStr] = heightStr.split("'");
//   const feet = parseInt(feetStr);
//   const inches = parseInt(inchesStr);
//   return feet * 12 + inches;
// }

// function heightColorCheck(guess, player){
//   var Nguess = parseHeight(guess);
//   var Nplayer = parseHeight(player);
  
//   if (Nguess === Nplayer) {
//     return "correct";
//   } else if (Math.abs(Nguess - Nplayer) > 3) {
//     return "incorrect";
//   } else {
//     return "close";
//   }
// }

function weightColorCheck(guess, player){
  if (guess === player) {
    return "correct";
  } else if (Math.abs(guess - player) > 35) {
    return "incorrect";
  } else {
    return "close";
  }
}

function ageColorCheck(guess, player){
  if (guess === player) {
    return "correct";
  } else if (Math.abs(guess - player) > 7) {
    return "incorrect";
  } else {
    return "close";
  }
}

function equalCheck(guess, player){

  if (guess === player) {
    return "correct";
  } else {
    return "incorrect";
  }
}

function teamCheck(guess, player){

  if (guess === player) {
    return "correct";
  } else if(detectSameDivision(guess, player)) {
    return "close";
  }else{
    return "incorrect";
  }
}

function getDirection(guess, player){
if(guess<player){
  return guess + " ↑";
}
if(guess>player){
  return guess + " ↓";
}
if(guess===player){
  return guess;
}
}

function positionColorCheck(guess, player){

  if (guess === player) {
    return "correct";
  } else if(detectSameSide(guess, player)) {
    return "close";
  }else{
    return "incorrect";
  }
}

function response(correctPlayer, guessedPlayersList, players) {

var guessedPlayersNew = [];
for(let i = 0; i<guessedPlayersList.length; i++){
guessedPlayersNew.push(players.filter(player => player.Name === guessedPlayersList[i])[0]);
}
var fulldiv = [];

for(let j = 0; j<guessedPlayersNew.length; j++)
{
  
    fulldiv.push(
      <div className="response">
        <div 
          className={`response-box ${equalCheck(guessedPlayersNew[j].Name, correctPlayer.Name)}`}>
          {guessedPlayersNew[j].Name}
        </div>
        <div 
          className={`response-box bigger-font ${teamCheck(guessedPlayersNew[j].Team, correctPlayer.Team)}`}>
          {guessedPlayersNew[j].Team}
        </div>
        <div 
          className={`response-box bigger-font ${ageColorCheck(Number(guessedPlayersNew[j].Age), Number(correctPlayer.Age))}`}>
          {getDirection(guessedPlayersNew[j].Age, correctPlayer.Age)}
        </div>
        <div 
          className={`response-box bigger-font ${weightColorCheck(Number(guessedPlayersNew[j].Weight), Number(correctPlayer.Weight))}`}>
          {getDirection(guessedPlayersNew[j].Weight, correctPlayer.Weight)}
        </div>
        {/* <div 
          className={`response-box ${heightColorCheck(guessedPlayersNew[i].Height, correctPlayer.Height)}`}> 
          {getDirection(guessedPlayersNew[i].Height, correctPlayer.Height)}
        </div> */}
        <div 
          className={`response-box bigger-font ${positionColorCheck(guessedPlayersNew[j].Position, correctPlayer.Position)}`}> 
          {guessedPlayersNew[j].Position}
        </div>
      </div>)
}

  return (
    <div className="response-container">
    {fulldiv.reverse()}
    </div>
  );
}

export default response;
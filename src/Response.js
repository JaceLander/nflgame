import React, { useEffect, useState } from "react";


function response(correctPlayerName, guessedPlayersList, players) {
    //if age === 1, real value is lower. 2 is correct, 3 is higher.
    //if age === 1, wrong side of the ball. 2 is correct, 3 is right side of the ball but wrong position.
    //if weight === 1, real value is lower. 2 is correct, 3 is higher.
    //if height === 1, real value is lower. 2 is correct, 3 is higher.
    //if num === 1, real value is lower. 2 is correct, 3 is higher.
    //if team === 0, wrong team. if team === 1, correct team.

var guessedPlayersNew = [];
for(var i = 0; i<guessedPlayersList.length; i++){
var name = guessedPlayersList[i];
guessedPlayersNew.push(players.filter(player => player.Name === name)[0]);

}
const correctPlayer = players.filter(player => player.Name === correctPlayerName);
var fulldiv = [];
for(var i = 0; i<guessedPlayersNew.length; i++)
{
  
    fulldiv.push(
      <div className="response">
        {/* <div>{guessedPlayersNew[i].UsaTodayHeadshotNoBackgroundUrl}</div> */}
        <div className="response-box">{guessedPlayersNew[i].Name}</div>
        <div className="response-box">{guessedPlayersNew[i].Team}</div>
        <div className="response-box">{guessedPlayersNew[i].Age}</div>
        <div className="response-box">{guessedPlayersNew[i].Weight}</div>
        <div className="response-box"> {guessedPlayersNew[i].Height}</div>
      </div>)
}

  return (
    <div className="response-container">
    {fulldiv}
    </div>
  );
}

export default response;
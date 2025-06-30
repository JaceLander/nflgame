import React, { useEffect, useState } from "react";


function selection(players, guess, functions) {
var fulldiv = [];
for(var i = 0; i<players.length; i++)
{
  var name = players[i].Name;
  if(name.toLowerCase().includes(guess.toLowerCase())){
    fulldiv.push(
      <button 
      className="buttons" 
      onClick={functions}
      value={name}>
      {name}
      </button>)
      }
}

  return (
    fulldiv
  );
}

export default selection;
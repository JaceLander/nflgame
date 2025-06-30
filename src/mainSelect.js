import React, { useState, useEffect } from "react";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import { fetchPlayers } from "./PlayerList";

const players = await fetchPlayers();
const activePlayers = players.filter(player => player.Status === 'Active');

//answer, guess
function GuessResponse(activePlayers, answer, guess) {

  const guessedPlayer = activePlayers.filter(player => (player.FirstName + " " + player.LastName).toLowerCase() === guess.toLowerCase());
  const correctPlayer = activePlayers.filter(player => (player.FirstName + " " + player.LastName).toLowerCase() === answer.toLowerCase());



    //if age === 1, real value is lower. 2 is correct, 3 is higher.
    var ageDirection;
    //if age === 1, wrong side of the ball. 2 is correct, 3 is right side of the ball but wrong position.
    var positionDirection;
    //if weight === 1, real value is lower. 2 is correct, 3 is higher.
    var weightDirection;
    //if height === 1, real value is lower. 2 is correct, 3 is higher.
    var heightDirection;
    //if num === 1, real value is lower. 2 is correct, 3 is higher.
    var numDirection;
    //if team === 0, wrong team. if team === 1, correct team.
    var weightDirection;



    return null;
}
export default {GuessResponse}





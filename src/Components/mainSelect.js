import React, { useState } from "react";
import axios from "axios";


//answer, guess
async function guessResponse(){


    const apiKey = process.env.REACT_APP_SPORTSDATA_API_KEY;
    axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/PlayersByAvailable?key=${apiKey}`)
    .then(res => {
      const players = res.data;
      this.setState({ players });
    })


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



    return
}

export default {guessResponse}





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
    "RB",  // Running Back
    "FB",  // Fullback
    "WR",  // Wide Receiver
    "TE",  // Tight End
    "LT",  // Left Tackle
    "LG",  // Left Guard
    "C",   // Center
    "RG",  // Right Guard
    "RT"   // Right Tackle
  ];
  
  const defensivePositions = [
    "DE",   // Defensive End
    "DT",   // Defensive Tackle
    "NT",   // Nose Tackle
    "EDGE", // Edge Rusher
    "LB",   // Linebacker
    "OLB",  // Outside Linebacker
    "ILB",  // Inside Linebacker
    "CB",   // Cornerback
    "S",    // Safety
    "FS",   // Free Safety
    "SS"    // Strong Safety
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
  
  function parseHeight(heightStr) {
    const [feetStr, inchesStr] = heightStr.split("'");
    const feet = parseInt(feetStr);
    const inches = parseInt(inchesStr);
    return feet * 12 + inches;
  }
  
  function heightColorCheck(guess, player){
    var Nguess = parseHeight(guess);
    var Nplayer = parseHeight(player);
    
    if (Nguess === Nplayer) {
      return "correct";
    } else if (Math.abs(Nguess - Nplayer) > 6) {
      return "incorrect";
    } else {
      return "close";
    }
  }
  
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

  export default '*';
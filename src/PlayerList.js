// PlayerList.js
import axios from 'axios';

   async function fetchPlayers() {
    const apiKey = process.env.REACT_APP_SPORTSDATA_API_KEY;
    try {
      const res = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/Players?key=${apiKey}`);
      return res.data;
    } catch (err) {
      console.error("Error fetching players:", err);
      return []; 
    }


  }


 export {fetchPlayers}
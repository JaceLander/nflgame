function getRandomPlayer(){
    const nflPlayersActive = [
        "Patrick Mahomes",
        "Russell Wilson", // Recently signed with Steelers
        "Trevor Lawrence",
        "Joe Burrow",
        "Justin Herbert",
        "Josh Allen",
        "Jalen Hurts",
        "Dak Prescott",
        "Kirk Cousins", // Signed with Falcons
        "Matthew Stafford",
        "Tua Tagovailoa",
        "Jordan Love",
        "Geno Smith",
        "Derek Carr",
        "Justin Fields", // Traded to Steelers
        "Deshaun Watson",
        "Lamar Jackson",
        "C.J. Stroud",
        "Trey Lance", // Still on Cowboys roster
        "Derrick Henry", // Signed with Ravens
        "Christian McCaffrey",
        "Saquon Barkley", // Signed with Eagles
        "Nick Chubb",
        "Jonathan Taylor",
        "Austin Ekeler", // Signed with Commanders
        "Joe Mixon", // Traded to Texans
        "Dameon Pierce",
        "Travis Etienne",
        "Tony Pollard", // Signed with Titans
        "Aaron Jones", // Signed with Vikings
        "Josh Jacobs", // Signed with Packers
        "Najee Harris",
        "James Conner",
        "Cam Akers", // Still active with Vikings
        "Rhamondre Stevenson",
        "Breece Hall",
        "Elijah Mitchell",
        "De’Von Achane",
        "D’Andre Swift", // Signed with Bears
        "Kenneth Walker III",
        "Alvin Kamara",
        "Kenneth Gainwell",
        "Zack Moss", // Signed with Bengals
        "Kyren Williams",
        "Davante Adams",
        "Tyreek Hill",
        "Stefon Diggs", // Traded to Texans
        "Cooper Kupp",
        "A.J. Brown",
        "Mike Evans",
        "Terry McLaurin",
        "DeVonta Smith",
        "Justin Jefferson",
        "Ja'Marr Chase",
        "CeeDee Lamb",
        "Amon-Ra St. Brown",
        "Chris Godwin",
        "Keenan Allen", // Traded to Bears
        "Tee Higgins",
        "DJ Moore",
        "Courtland Sutton",
        "Garrett Wilson",
        "Michael Pittman Jr.", // Signed extension with Colts
        "JuJu Smith-Schuster", // Signed with Patriots
        "Rashod Bateman",
        "Brandon Aiyuk",
        "Marquise Brown", // Signed with Chiefs
        "Deebo Samuel",
        "Gabriel Davis", // Signed with Jaguars
        "Kadarius Toney",
        "Romeo Doubs",
        "Jahan Dotson",
        "Drake London",
        "Skyy Moore",
        "Josh Palmer",
        "George Pickens",
        "Adam Thielen", // Still active with Panthers
        "Allen Lazard",
        "Daniel Jones", // Still with Giants
        "George Kittle",
        "Travis Kelce",
        "Mark Andrews",
        "Darren Waller", // Considering retirement, but still on Giants roster. Including for now.
        "Dallas Goedert",
        "Evan Engram",
        "T.J. Hockenson",
        "Kyle Pitts",
        "Pat Freiermuth",
        "Cole Kmet",
        "Tyler Higbee",
        "Mike Gesicki", // Signed with Bengals
        "Hunter Henry",
        "Taysom Hill",
        "Dalton Schultz", // Signed with Texans
        "Jonnu Smith", // Signed with Dolphins
        "Zach Ertz", // Signed with Commanders
        "Will Dissly", // Signed with Chargers
        "David Njoku",
        "Noah Fant", // Signed with Seahawks
        "Austin Hooper", // Signed with Patriots
        "Jake Ferguson",
        "Greg Dulcich",
        "Chigoziem Okonkwo",
        "AJ Dillon",
        "Tyler Allgeier",
        "Jake Browning",
        "Alec Pierce",
        "Jaxon Smith-Njigba",
        "Jameson Williams",
        "Jayden Reed",
        "John Metchie III",
        "Chris Olave",
        "Wan'Dale Robinson",
        "James Cook",
        "Quentin Johnston",
        "Treylon Burks",
        "Zay Flowers",
        "Jordan Addison",
        "Tank Dell",
        "Rome Odunze", // Rookie for 2025
        "Marvin Mims Jr.",
        "Josh Downs",
        "Puka Nacua",
        "Michael Wilson",
        "Jaylen Waddle",
        "Jalen Hurts",
        "Jacoby Brissett", // Signed with Patriots
        "Baker Mayfield", // Signed extension with Bucs
        "Mac Jones", // Traded to Jaguars
        "Bryce Young",
        "Anthony Richardson",
        "Desmond Ridder", // Traded to Cardinals
        "Brock Purdy",
        "Sam Howell", // Traded to Seahawks
        "Kenny Pickett", // Traded to Eagles
        "Zach Wilson", // Traded to Broncos
        "Tanner McKee", // Still with Eagles
        "Jameis Winston", // Signed with Browns
        "Brandon Allen", // Signed with Dolphins
        "Aaron Rodgers", // Corrected position (QB) - Still active with Jets.
        "Joshua Dobbs", // Signed with 49ers.
        "Odell Beckham Jr." // Signed with Dolphins for 2024 season. Still possible for 2025.
      ];
      let randomInt = Math.floor(Math.random() * (nflPlayersActive.length - 0 + 1)) + 0;
      return nflPlayersActive[randomInt];

}
export default getRandomPlayer;


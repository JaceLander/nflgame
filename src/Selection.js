function selection(players, guess, functions, pos) {
var fulldiv = [];
for(var i = 0; i<players.length; i++)
{
  var name = players[i].Name;
  var playerPosition = players[i].Position;

  if(name.toLowerCase().includes(guess.toLowerCase()) && playerPosition.toLowerCase().includes(pos.toLowerCase())){
    fulldiv.push(
      <button 
      className="button-names buttons game-font" 
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
function selectionPos(array, pos, functions) {
  var fulldiv = [];
  for(var i = 0; i<array.length; i++)
  {
    var currentPos = array[i];
    if(currentPos.toLowerCase().includes(pos)){
      fulldiv.push(
        <button 
        className="buttons game-font button-position" 
        onClick={functions}
        value={currentPos}>
        {currentPos}
        </button>)
        }
  }
  
    return (
      fulldiv
    );
  }

export {selection, selectionPos};
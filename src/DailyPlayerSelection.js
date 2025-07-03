function dailyPlayer(){
let player;
const today = new Date();
const day = today.getDate();


  switch (`${day}`) {
    case "3":
        player = "Chris Jones";
        break;
      case "4":
        player = "T.J. Watt";
        break;
      case "5":
        player = "Josh Allen";
        break;
      case "6":
        player = "Elijah Moore";
        break;
      case "7":
        player = "Sam LaPorta";
        break;
      case "8":
        player = "Juwan Johnson";
        break;
      case "9":
        player = "Mac Jones";
        break;
      case "10":
        player = "Tua Tagovailoa";
        break;
      case "11":
        player = "Brock Purdy";
        break;
      case "12":
        player = "Mac Jones";
        break;
      case "13":
        player = "Sam Howell";
        break;
      case "14":
        player = "Derwin James";
        break;
      case "15":
        player = "Mark Andrews";
        break;
      case "16":
        player = "David Montgomery";
        break;
      case "17":
        player = "Joe Mixon";
        break;
      case "18":
        player = "Alvin Kamara";
        break;
      case "19":
        player = "Kenneth Walker III";
        break;
      case "20":
        player = "Jaylen Waddle";
        break;
      case "21":
        player = "Zay Flowers";
        break;
      case "22":
        player = "Jahan Dotson";
        break;
      case "23":
        player = "Bijan Robinson";
        break;
      case "24":
        player = "Puka Nacua";
        break;
      case "25":
        player = "Drake London";
        break;
      case "26":
        player = "Michael Pittman Jr.";
        break;
      case "27":
        player = "Russell Wilson";
        break;
      case "28":
        player = "Micah Parsons";
        break;
      case "29":
        player = "Garrett Wilson";
        break;
      case "30":
        player = "Justin Jefferson";
        break;
      case "31":
        player = "Chris Jones";
        break;
      case "1":
        player = "Romeo Doubs";
        break;
      case "2":
        player = "Rashod Bateman";
        break;
    default:
      player = "Jalen Hurts";
  }
    return player;
}

export default dailyPlayer;
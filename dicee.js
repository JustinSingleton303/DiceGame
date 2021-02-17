/* dicee.js javaScript file that dicee.html
   uses to make the dice game run */

var r1wins = false;
var r2wins = false;

function dieRoll(){
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

function compareRolls(r1, r2){
  if(r1 < r2){
    r1wins = true;
  }
  else if(r1 > r2){
    r2wins = true;
  }
}

/* dicee.js javaScript file that dicee.html
   uses to make the dice game run */

var dicePics = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
                "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var r1wins = false;
var r2wins = false;
// get rolls for comparison
var p1roll = dieRoll();
var p2roll = dieRoll();
compareRolls(p1roll, p2roll);

// six sided die roll
function dieRoll(){
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

function compareRolls(r1, r2){
  if(r1 < r2){
    r2wins = true;
  }
  else if(r1 > r2){
    r1wins = true;
  }
  else{
    r1wins = false;
    r2wins = false;
  }
}

//the if / else structure here is
//based on which boolean values have
//been triggered by compareRolls() function
function gameResult(){
  if(r1wins){
    return "Player one wins!";
  }
  else if(r2wins){
    return "Player two wins!";
  }
  else{
    return "It's a tie!";
  }
}

function getImage(a){
  var dImg = dicePics[a - 1];
  return dImg;
}

var testImage = getImage(3);

//all changes to the html document are
//handeled here

document.getElementById("winner").innerHTML = gameResult();
document.querySelector(".img1").setAttribute("src", getImage(p1roll));
document.querySelector(".img2").setAttribute("src", getImage(p2roll));

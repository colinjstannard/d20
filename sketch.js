var fr = 60;
var vel = 0;
var inc = 0;
var dec = .99;
var tick;
var lastTick = 18;
var back = true;
var angles = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var games = [];
var wedges = 20;
var spinAgain = ["Spin Again"];
var moon;
var canvas;
var ff = false;
var fb = true;

function preload() { // Preloads Sounds
  soundFormats('ogg', 'mp3');
  tick = loadSound('assets/tick.mp3');
  moon = loadImage("moon.png");
}

function setup() {
  loadNames();
  canvas = createCanvas(900, 900);
  canvas.parent('canvas');
  frameRate(fr);
  smooth();
}

function draw(){
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    background(17); // Sets Background color to #111111
    translate(width/2, height/2); // Sets orgin to center
    pieChart(800, angles); // Draws Roulette
    drawCenter(); //Draws Center Circle
    getNames(); // Gets Names from HTML Forms
    drawText(); // Draws Names on Roulette
    drawPointer(); // Draws The Wheel Selector
    doPhysics(); // Calculates Physics
    doSound(); // Calculates Sound
}

function getNames(){
  localStorage.setItem("alert", document.getElementById("alt").style.display);
  games = [];
  var num = [];
  var count = 0;
  var temp = document.getElementById("gameInput");
  for(var i = 0; i < wedges; i++){ // Goes through each form. != Didn't work
    if(temp.elements[i].value == "" || temp.elements[i].value == " "){
    }
    else{
      num[count] = temp.elements[i].value;
      count++;
    }

  }
  calculateGames(num, count);
  saveNames();
}

function saveNames(){
  for(var i = 0; i < wedges; i++){
    localStorage.setItem("game" + i, games[i]);
  }
}

function loadNames(){
  document.getElementById("alt").style.display = localStorage.getItem("alert");
  for(var i = 0; i < wedges; i++){
    document.getElementById("gameInput").elements[i].value = localStorage.getItem("game" + i);
  }
}

function calculateGames(num, count){
  switch(count){
    case 20:
      for(var i = 0; i < count; i++){
        games[i] = str(num[i]);
      }
    break;
    case 19:
      for(var i = 0; i < count; i++){
        games[i] = str(num[i]);
      }
      append(games, "Spin Again");
      break;
    case 18:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
      }
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 19);
      break;
    case 17:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 19);
      break;
    case 16:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 14);
      splice(games, spinAgain, 19);
      break;
    case 15:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 11);
      splice(games, spinAgain, 15);
      splice(games, spinAgain, 19);
      break;
    case 14:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 10);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 16);
      splice(games, spinAgain, 19);
      break;
    case 13:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 1);
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 10);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 16);
      splice(games, spinAgain, 19);
      break;
    case 12:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 3);
      splice(games, spinAgain, 5);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 11);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 15);
      splice(games, spinAgain, 17);
      break;
    case 11:
      for(var i = 0; i < wedges; i++){
          games[i] = str(num[i]);
        }
      splice(games, spinAgain, 1);
      splice(games, spinAgain, 3);
      splice(games, spinAgain, 5);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 11);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 15);
      splice(games, spinAgain, 17);
      break;
    case 10:
      for(var i = 0; i < wedges; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      break;
    case 9:
      for(var i = 0; i < count*2; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 19);
      break;
    case 8:
      for(var i = 0; i < count*2; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 9);
      splice(games, spinAgain, 14);
      splice(games, spinAgain, 19);
      break;
    case 7:
      for(var i = 0; i < count*2; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      splice(games, spinAgain, 4);
      splice(games, spinAgain, 7);
      splice(games, spinAgain, 10);
      splice(games, spinAgain, 13);
      splice(games, spinAgain, 16);
      splice(games, spinAgain, 19);
      break;
    case 6:
      for(var i = 0; i < count*3; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
        splice(games, spinAgain, 9);
        splice(games, spinAgain, 19);
      break;
    case 5:
      for(var i = 0; i < wedges; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      break;
    case 4:
      for(var i = 0; i < wedges; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      break;
    case 3:
      for(var i = 0; i < count*6; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
        splice(games, spinAgain, 9);
        splice(games, spinAgain, 19);
      break;
    case 2:
      for(var i = 0; i < wedges; i = i){
        for(var j = 0; j < count; j++){
          games[i] = str(num[j]);
          i++;
        }
      }
      break;
    case 1:
      for(var i = 0; i < wedges; i++){
        games[i] = "";
      }
      break;
    case 0:
      for(var i = 0; i < wedges; i++){
        games[i] = "";
      }
      break;
    default:
  }
}

function doSound(){

  if(inc!= 0){

    if(lastTick <= vel && !back && ff == false){
      tick.play();
      lastTick +=18;
    }
    else if(lastTick <= vel && !back && ff == true){
      fb = true;
      ff = false;
      lastTick +=18;
    }
    else if(lastTick >= vel && back && fb == false){
      lastTick -=18
      tick.play();
    }
    else if(lastTick >= vel && back && fb == true){
      fb = false;
      ff = true;
      lastTick -=18;
    }
  }
}

function mouseDragged(){

  var file = document.getElementById("input");
  if (file.style.display !== "block") {
    var newVelocity = (atan2(mouseY-height/2,mouseX-width/2) - atan2(pmouseY-height/2,pmouseX-width/2));
    if(newVelocity < 0){
      newVelocity = 0 - (atan2(mouseY-height/2,mouseX-width/2) - atan2(pmouseY-height/2,pmouseX-width/2));
      back = true;
    } else {
      back = false;
    }
    if(newVelocity > 5)
      newVelocity = 0;
    inc = newVelocity * 25;
  }
}

function keyPressed(){
  var file = document.getElementById("input");
  if(keyCode == 32 && file.style.display !== "block") // Space
    inc = 4 + random(19);
}

function doPhysics(){
  if(inc > .03){
    if(back){
      vel -=inc;
    } else
      vel +=inc;
    inc *= dec;
    if(vel >= 360 || vel <= -360){
      vel = 0;
      lastTick = 0;
    }
  } else
    inc = 0;
}

function drawCenter(){
  image(moon,-56/2,-56/2, 56, 56);
}

function drawPointer(){
  fill(130,40,40);
  triangle(420, 10, 380, 0, 420, -10);
}

function drawText(){
  rotate(radians(vel));
  noStroke();
  textAlign(RIGHT, CENTER);
  textSize(22);
  for(var i = 0; i <wedges ; i++){
    if(i % 2 == 0){
      fill(244);
    } else {
      fill(17);
    }
    rotate(radians(18/2)); //rotates to center of wedge
    text(games[i], 375, 0);
    rotate(radians(18/2)); //rotates to end of edge
  }
  rotate(0 - radians(vel));
}

function pieChart(diameter, data) {
  rotate(radians(vel));
  strokeWeight(3);
  stroke(244);
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    if(i % 2 == 0){
      fill(17);
    } else{
      fill(244);
    }
    arc(0, 0, diameter, diameter, lastAngle, lastAngle+radians(angles[i] * 18));
    lastAngle += radians(angles[i] * 18);
  }
  rotate(0 - radians(vel));
}

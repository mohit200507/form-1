var canvas, database;
var position;
var form, player, game
var gameState=0
var playerCount

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  canvas = createSprite(250,250,10,10);
  }

function draw(){
  background("white");
 }
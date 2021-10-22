var database;
var Gamestate= 0, PlayerCount;
var form, game, player;
var bg, bgimg

function preload() {
  backgroundImage = loadImage("assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  bgimg = backgroundImage;
}

function draw() {
  background(bgimg);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

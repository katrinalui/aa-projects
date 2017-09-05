const GameView = require("./game_view.js");

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("game-canvas");
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  const gameView = new GameView(ctx);

  gameView.start();

});

const MovingObject = require("./moving_object.js");
const Util =  require("./utils.js");

function Ship(options){
  this.radius = Ship.RADIUS;
  this.color = Ship.COLOR;
  this.vel = [0,0];
  this.pos = options.pos;
  this.game = options.game;
}

Util.inherits(Ship, MovingObject);

Ship.RADIUS = 15;
Ship.COLOR = "red";

Ship.prototype.relocate = function () {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function (impluse) {
  
};

module.exports = Ship;

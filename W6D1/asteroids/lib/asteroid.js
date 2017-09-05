const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Ship = require("./ship.js");


function Asteroid (options) {
  this.pos = options.pos;
  this.vel = Util.randomVec(1);
  this.radius = Asteroid.RADIUS;
  this.color = Asteroid.COLOR;
  this.game = options.game;
}

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = "#000";
Asteroid.RADIUS = 20;

Asteroid.prototype.collideWith = function (otherObject) {
    this.game.remove(this);
    if (otherObject instanceof Ship) {
      otherObject.relocate();
    } else {
      this.game.remove(otherObject);
    }
};

module.exports = Asteroid;

window.asteroid = Asteroid;

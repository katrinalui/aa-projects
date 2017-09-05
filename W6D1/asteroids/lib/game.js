const Asteroid = require ("./asteroid.js");
const Ship = require("./ship.js");
function Game () {
  this.asteroids = [];
  this.ship = this.addShip();
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.addAsteroids();
  }
}

Game.NUM_ASTEROIDS = 5;
Game.DIM_X = 500;
Game.DIM_Y = 500;

Game.prototype.addAsteroids = function () {
  const options = { pos: this.randomPosition(), game: this };
  this.asteroids.push(new Asteroid(options));
};

Game.prototype.addShip = function () {
  const options = { pos: this.randomPosition(), game: this };
  return new Ship(options);
};


Game.prototype.randomPosition = function () {
  const ranX = Math.round(Game.DIM_X * Math.random());
  const ranY = Math.round(Game.DIM_Y * Math.random());
  return [ranX, ranY];
};

Game.prototype.allObjects = function () {
  return this.asteroids.concat(this.ship);
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, 500, 500);
  this.allObjects().forEach((object)=>{
    object.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.allObjects().forEach((object)=>{
    object.move();
  });
};

Game.prototype.wrap = function (pos) {
  const wrapPos = [];

  if (pos[0] >= Game.DIM_X) {
    wrapPos.push(0);
  } else if (pos[0] <= 0) {
    wrapPos.push(Game.DIM_X);
  } else {
    wrapPos.push(pos[0]);
  }

  if (pos[1] >= Game.DIM_Y) {
    wrapPos.push(0);
  } else if (pos[1] <= 0) {
    wrapPos.push(Game.DIM_Y);
  } else {
    wrapPos.push(pos[1]);
  }

  return wrapPos;
};

Game.prototype.checkCollisions = function(){
  this.allObjects().forEach((object, index)=>{
    for (let i = 0; i < this.allObjects().length; i++) {
      if (i === index) {
        continue;
      }
      if (object.isCollidedWith(this.allObjects()[i])) {
        object.collideWith(this.allObjects()[i]);
      }
    }
  });
};

Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function (asteroid) {
  const index = this.asteroids.indexOf(asteroid);
  if (index > -1) {
    this.asteroids.splice(index, 1);
  }
};

module.exports = Game;

window.Game = Game;

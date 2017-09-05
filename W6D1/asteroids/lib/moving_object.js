const MovingObject = function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
};

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = this.color;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function (otherObject){
  let distance = Math.sqrt(
    Math.pow((this.pos[0] - otherObject.pos[0]),2)
    +
    Math.pow((this.pos[1] - otherObject.pos[1]),2)
  );

  if(distance < (this.radius + otherObject.radius)) {
    return true;
  }
  return false;
};

MovingObject.prototype.collideWith = function (otherObject) {
    // this.game.remove(this);
    // this.game.remove(otherObject);
};


module.exports = MovingObject;

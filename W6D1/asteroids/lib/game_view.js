const Game = require("./game.js");
const keymaster = require("./keymaster.js");

function GameView(ctx){
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  const that = this;
  setInterval(function () {
    that.game.step();
    that.game.draw(that.ctx);
    that.bindKeyHandlers();
  }, 20);
};

GameView.prototype.bindKeyHandlers = function () {
    // define short of 'a'
  key('a', function(){ alert('you pressed a!'); });

};


module.exports = GameView;

window.GameView = GameView;

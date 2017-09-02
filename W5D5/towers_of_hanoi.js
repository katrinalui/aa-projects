const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3, 2, 1], [], []];
  }

  promptMove(callback) {
    console.log(this.stacks);
    reader.question("Choose a tower to move from: ", function (start) {
      let startTowerIdx = start;
      reader.question("Choose a tower to move to: ", function (end) {
        let endTowerIdx = end;
        reader.close();
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    const startTower = this.stacks[startTowerIdx];
    const endTower = this.stacks[endTowerIdx];

    if (endTower.length === 0) {
      return true;
    } else if (startTower.length === 0) {
      return false;
    } else {
      const topStartDisc = startTower[startTower.length - 1];
      const topEndDisc = endTower[endTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      
    }
  }

  run() {
    // until tower 2 or 3 is full
      // get move from player
      // make move on board
  }
}

let g = new Game();
g.promptMove();

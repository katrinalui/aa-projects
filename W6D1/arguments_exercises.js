// function sum(...nums) {
//   let result = 0;
//   nums.forEach(num => { result += num; });
//   return result;
// }
//
// console.log(sum(1, 2, 3, 4, 5));
//
Function.prototype.myBind = function () {
  const args = Array.from(arguments);
  const anything = this;
  return function () {
    const arrays = args.slice(1).concat(Array.from(arguments));
    anything.apply(args[0], arrays);
  };
};

// Wherethisfxisdefined.function.bind(contex, ); //return FUNCTION
// function.apply(contex, ); //INVOKE THE FUNCTION
// function.call(contex, ); //INVOKE THE FUNCTION

Function.prototype.myBind2 = function (ctx, ...bindargs) {
  return (...callargs) => {
    this.apply(ctx, bindargs.concat(callargs));
  };
};

//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");

function curriedSum(numArgs) {
  const numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let ourSum = 0;
      numbers.forEach(n => { ourSum += n; });
      return ourSum;
    } else {
      return _curriedSum;
    }
  };
}

const testSum = curriedSum(4);
console.log(testSum(5)(30)(20)(1));

Function.prototype.curry = function curry(numArgs){
  const args = [];
  const that = this;
  return function _curried(arg) {
    args.push(arg);
    if(args.length === numArgs) {
      return that.apply(that, args);
    }
    else {
      return _curried;
    }
  };
};

Function.prototype.curry2 = function curry2(numArgs){
  const args = [];
  const that = this;
  return function _curried2(arg) {
    args.push(arg);
    if(args.length === numArgs) {
      return that(...args);
    }
    else {
      return _curried2;
    }
  };
};


function average() {
  const args = Array.from(arguments);
  const len = args.length;
  let sum = 0;
  args.forEach((num)=>{
    sum += num;
  });

  return sum/len;
}

const testCurry = average.curry(3);
console.log(testCurry(2)(3)(4));

const testCurry2 = average.curry2(3);
console.log(testCurry2(2)(3)(4));

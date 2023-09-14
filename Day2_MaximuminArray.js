// Find the Maximum number in a given Array
let arr = [3, 5, 9, 11, 35, 89];
// Approach_1: Using IN-built-Math.max Func and spread operator

const maxMath = Math.max(...arr);
console.log(maxMath);

//Approach_2: Using reduce method
const maxReduce = arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
console.log(maxReduce);

//Approach_3: Using sort() method
const maxSort = arr.sort((a, b) => b - a)[0];
console.log(maxSort);

// Approach_4: Using for each loop

let max = arr[0];
arr.forEach((item) => {
  if (item > max) max = item;
});

console.log(max)

//Approach_5: Using For Loop

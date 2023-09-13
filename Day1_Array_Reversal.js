//Reverse An Array Using Different Approaches

// Approach_1: Using Inbuilt reverse method: Overwrites the Original array

let arr = [1, 2, 3, 4, 5, 6];
let reversedArr = arr.reverse();
console.log(reversedArr);

// Approach_2: Using map method;
arr = [1, 2, 3, 4, 5, 6];
let mapReverse = arr.map((_, i, arr) => arr[arr.length - 1 - i]);
console.log(mapReverse);

//Approach_3: Using For of loop

let forofArr = [];
for (const i of arr) {
  forofArr.unshift(i);
}
console.log(forofArr);

//Approach_4: Using While Loop
//Approach_5: using For Loop
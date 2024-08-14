console.log('js file is loaded')

//Exercise 1 --------
const foods = [];

console.log(foods);

//Exercise 2 -------

foods.push('Pizza', 'Cheeseburger')

console.log(foods)

//Exercise 3 --------

foods.unshift('tacos')

console.log(foods)

//Exercise 4 -------

let favFood = foods[1];

console.log(favFood)

//Exercise 5 ------

foods.splice(2, 0, 'tofu')

console.log(foods)

//Exercise 6 -------

foods.splice(1,1, 'sushi' , 'cupcake')

console.log(foods)

//Exercise 7 --------

let yummy = foods.slice(1, 3);

console.log(yummy)

//Exercise 8 --------

let soyIdx = foods.indexOf('tofu');

console.log(soyIdx)

//Exercise 9 -------

let allFoods = foods.join('->')

console.log(allFoods)

//Exercise 10 -----------

let hasSoup = foods.includes('soup')

console.log(hasSoup)

//Exercise 11 -------

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [];

nums.forEach(function(num) {
    if (num % 2 !== 0) {
        odds.push(num);
    }
});
console.log(odds);

// Exercise 12 --------

let fizz = []; 
let buzz = [];
let fizzbuzz = [];

nums.forEach(function(num) {
    if (num % 3 === 0) {
        fizz.push(num);
    }
    if (num % 5 === 0) {
        buzz.push(num);
    }
    if (num %3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    }
});

console.log('fizz:', fizz);
console.log('Buzz:', buzz);
console.log('FizzBuzz', fizzbuzz);

// Exercise 13 -------

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

const numList = numArrays[numArrays.length - 1];

console.log(numList);

// Exercise 14 -------

const num = numArrays[2][1];

console.log(num);

// Exercise 15 ----------

let total = 0;

for (let i = 0; i < numArrays.length; i++) {
    for (let j = 0; j < numArrays[i].length; j++) {
        total += numArrays[i][j];
    }
}

console.log(total);

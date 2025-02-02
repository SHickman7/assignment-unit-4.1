console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log('In hello');
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log('Expecting "Hello World":', hello() );

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  console.log('In hello name', name );
  return 'Hello, '+ name +'!';
}
// Remember to call the function to test
let name = "Stephanie"
console.log('Expecting "Hello, Stephanie!"', helloName(name));




// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log( 'In addNumbers');
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log("Sum of 5 + 83", addNumbers(5,83));


// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree) {
  console.log('In multiplyThree')
  return numOne * numTwo * numThree
}

console.log ( '5 x 3 x 15', multiplyThree(5, 3, 15));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log ('Testing positive, expecting true', isPositive (15));
console.log ('Testing 0 or below, expecting false', isPositive (-33));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let array = ['cat', 'dog', 'gerbil', 'rabbit', 'snake' ];
let anotherArray = [];

function getLast(sampleArray) {
  console.log ('In getLast');
  return sampleArray.pop();
}

console.log ('Array with items', getLast(array));
console.log ('Empty array', getLast(anotherArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 



let thisArray = [-15, -8, -4, 0, 3, 7, 18];
let value = -4;
let anotherValue = 125; 

function find (value, thisArray) {
  for (let i = 0; i < thisArray.length; i ++) {
    if (thisArray [ i ] === value ) {
      return true
    }
  }
  return false;
}

console.log ('Expecting true', find( value, thisArray));
console.log ('Expecting false', find (anotherValue, thisArray));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise


function isFirstLetter(letter, string) {
  let firstChar = string.charAt(0);

  if (firstChar === letter){
    return true
  }
  return false
  }

let string = "stephanie";
console.log('Expecting true:', isFirstLetter('s', string));
console.log ('Expecting false:', isFirstLetter('e', string));


let stretchArray = [ 5, 15, 45, 60, 80];

// 9. Function to return the sum of all numbers in an array
function sumAll(stretchArray) {
  let sum = 0;
  // TODO: loop to add items
    for ( let i = 0; i < stretchArray.length; i++){
      sum += stretchArray[i];
    }

  // TODO: return the sum
    return sum;
}

console.log ('Expecting 205:', sumAll(stretchArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let inputArray = [ -42, -17, -5, 2, 15, 24, 72];
let newArray = [];

function allPositive() {
  for (let i = 0; i < inputArray.length; i++){
    if (inputArray[i] > 0)
    newArray.push(inputArray[i]); 
   } return newArray;
  }
 console.log ("The values of the newArray are:", allPositive());


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}

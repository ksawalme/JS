var students = [{
    name: 'Khaled',
    age: 39,
    interestes: ['Javascript', 'react']
}, {
    name: 'Kouame',
    age: 30,
    interestes: ['Javascript', 'C#']
}]




// write a function called printOut that, given a string, console.log() it.
// ex: printOut('hello world')
// => hello world
function printOut(arg) {
    console.log(arg)
}

printOut('hello world');
printOut('second statement');
printOut('third time I call it');



// write a function sum that returns the sum of 2 given numbers
// ex: sum(3,4)
// => 7

function sum(firstNumber, secondNumber) {
    return (firstNumber + secondNumber)
}

var firstResult = sum(2, 5);
var secondResult = sum(5, 6);
console.log('the first result is', firstResult);
console.log('the secdon result is', secondResult);
console.log('the total result is', sum(firstResult, secondResult));

// write a function called printOut that, given an array, console.log() out each one of its elements
// ex: printOut([1,2,3])
// => 1
// => 2
// => 3

// function printOut() {

function printOut(myArray) {
  for ( var i=0; i<myArray.length; i++) {
      console.log(myArray[i])
  }
      
};

printOut([1,2,3]);

printOut(students)
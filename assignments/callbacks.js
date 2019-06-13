// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}

// getLength(arr, function(results){
//   console.log(arr.length);
// }

getLength(function(){
  console.log(arr.length);
})

function last(arr, cb) {
    return cb(arr.length - 1);
  // last passes the last item of the array into the callback.
}

last(items, function(last){
  console.log(last);
})

// last(items, function(last){
//   console.log(arr.length - 1);
// })

function sumNums(x, y, cb) {
  return cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

// sumNums(1, 2, function (results){
//   console.log(`1 + 2 is ${results}`);
// })

// sumNums(1, 2, function (results){
//   console.log(1 + 2);
// })

sumNums(1, 2, function (results){
  console.log(`${results}`);
})

function multiplyNums(x, y, cb) {
  return cb(x * y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

// multiplyNums(1, 2, function(results){
//   console.log(`1 * 2 is ${results}`);
// })

multiplyNums(1, 2, function(results){
  console.log(`${results}`);
})

function contains(item, list, cb) {
  if(item == list) {
    return "true";
  } else return "false";
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

// contains(item, list, function(results){
//   console.log()
// })

contains(1, 2, function(results){
  console.log(item == list)
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

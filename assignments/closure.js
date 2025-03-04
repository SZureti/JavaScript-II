// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const lastName = 'Zureti';
function greet() {
  const firstName = 'Saipher';
  console.log(`Hello ${lastName},`);
  function question(){
     return `is your first name ${firstName}?`;
  }
  return question();
}
console.log(greet());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// const counter = () => { 
//   let count = 0;  
//   count = count + 3;
//   return function (){
  
//     return count;
//   }
// };
// const newCounter = counter();
// console.log(newCounter());
// console.log(newCounter());
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
// };
// ;
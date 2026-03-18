/*
console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}
  //output is Hello Alice! because of function declaration hoisting,
  //  the function greet is hoisted to the top of the scope, allowing it to be called before its definition.
  */
 /*2.
 console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";
//output is Reference error because of variable hoisting, the variable getStatus is hoisted to the top of the scope
//  but is not initialized until the assignment, so when it is called before the assignment, it is undefined, resulting in a TypeError.
*/
/*function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();
//output is 0 (should give it in console.log(analyze())) because the default parameter is an empty array, so the filter method returns an empty array, and its length is 0.
*/
/*4.
function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();//1
counter();//2
console.log(counter());//3
//the counter function is a closure that retains access to the count variable defined in the makeCounter function.
//  Each time counter is called, it increments count and returns the new value. Therefore, the output will be 3 after three calls to counter.
*/
/*
// A function is a pure function 
// if it always produces the same output for the same input and has no side effects (does not modify any external state).
 function log(msg)
  { 
    console.log(msg);

   }
   function add(a, b) { return a + b; } 
 function getTime() { return Date.now(); } 
 function push(arr, val) { arr.push(val); return arr; }
 //this is a pure function because it always produces the same output for the same input and has no side effects.
 function add(a, b) { return a + b; }

Same input → same output

No side effects
👉 Pure function ✔️
 */

//👉 What actually happens?
/*function test(...args) {
  return args.length;
}
test("login", "pass", 200, true);*/
//The function returns 4

//But since there is no console.log(), nothing is printed on the screen
/* 7.
const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());
Arrow functions do not bind their own this, 
so this.env refers to the env property of the global object, which is undefined. Therefore, the output will be undefined.
*/
/*8.
function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne);
//console.log([1, 2, 3].map(double).map(addOne));
//The output will be [3, 5, 7] because the first map applies the double function to each element of the array,
//  resulting in [2, 4, 6], and then the second map applies the addOne function to each element of the new array, resulting in [3, 5, 7].
*/
/*What is the output?

function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));
*/
function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());
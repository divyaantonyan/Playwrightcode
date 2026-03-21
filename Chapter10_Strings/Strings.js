// Strings

let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;  // template literal
console.log(url);
console.log(status);
console.log(message);
//output:
// https://app.vwo.com
// pass
// Test completed in 320ms


// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks) — allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);
// Output: Hello, Alice! 2 + 2 = 4

// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;
console.log(report);
// Output:
//   Test: Login
//   Status: Pass
//   Duration: 320ms



// String() constructor (converts other types)
console.log(String(200));
String(true); // "true"
console.log(String(true));//output: true
String(null); 
console.log(String(null)); // output   null
String([1, 2]); // "[1,2]"  
console.log(String([1, 2])); // output - 1,2
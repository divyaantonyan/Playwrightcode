//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found

results.indexOf("fail"); //1
console.log(results.indexOf("fail"));
results.indexOf("skip");        // -1
console.log(results.indexOf("skip"));

// lastIndexOf — searches from the end
results.lastIndexOf("fail");    // 4
console.log(results.lastIndexOf("fail"));

// includes — returns boolean
results.includes("error"); // true
results.includes("skip");       // false

console.log(results.includes("error"));
console.log(results.includes("skip"));

// find — returns first matching element

let nums = [10, 25, 30, 45];
nums.find(x => x > 20);  // 25,30,45 -> A -25
console.log(nums.find(x => x > 20));


// findIndex 
nums.findIndex(n => n > 20);
console.log(nums.findIndex(n => n > 20));
nums.findLast(n => n > 20); // 45] 
console.log(nums.findLast(n => n > 20));

nums.findLastIndex(n => n > 20);// 3
console.log(nums.findLastIndex (n => n > 20))
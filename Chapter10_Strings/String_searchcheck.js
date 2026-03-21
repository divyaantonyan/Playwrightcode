// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes()
url.includes("staging");      
console.log(url.includes("staging")); // true
url.includes("production");    
console.log(url.includes("production"));   // false

// startsWith / endsWith
url.startsWith("https"); 
console.log(url.startsWith("https")); // true
url.startsWith("http://");  
console.log(url.startsWith("http://")); // false
url.endsWith("true");  // true
console.log(url.endsWith("true")); // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));

// search() — accepts regex, returns index
// Search basically works in a way that it searches with regex. 
console.log(url.search(/login/)); // regex

url.search(/\d+/);
console.log(url.search(/\d+/)); // -1, no digits
// Transforming Strings

let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim whitespace
//trim() removes whitespace from both ends of a string. 
// //-It does not modify the original string but returns a new string with the whitespace removed.
console.log(str.trim());
//trimStart() removes whitespace from the beginning of a string, while trimEnd() removes whitespace from the end of a string.
str.trimStart();
console.log(str.trimStart());
//trimEnd() removes whitespace from the end of a string, while trimStart() removes whitespace from the beginning of a string.
str.trimEnd();
console.log(str.trimEnd());

// Replace used to replace a part of the string with another value.
// - It takes two parameters: the substring to be replaced and the new substring. It returns a new string with the replacements made, without modifying the original string. If you want to replace all occurrences of a substring, you can use replaceAll() or use a regular expression with the global flag (g) in the replace() method.
let msg = "Test: FAIL. Retry: FAIL.";
//replace - replaces only the first occurrence of "FAIL" with "PASS"
console.log(msg.replace("FAIL", "PASS")); // // "Test: PASS. Retry: FAIL."  (first only)
//replaceAll - replaces all occurrences of "FAIL" with "PASS"
console.log(msg.replaceAll("FAIL", "PASS"));
//replace with regex and global flag - replaces all occurrences of "FAIL" with "PASS"
console.log(msg.replace(/FAIL/g, "PASS")); // replace all with Regex

// Concatenation

"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

// Splitting & Joining
"pass,fail,skip".split(",");  // ["pass", "fail", "skip"]
console.log("pass,fail,skip".split(","));  // ["pass", "fail", "skip"]
"hello".split("");  // ["h","e","l","l","o"]
console.log("hello".split(""));  // ["h","e","l","l","o"]

"test_login_pass".split("_").join(" "); // "test login pass"


// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);
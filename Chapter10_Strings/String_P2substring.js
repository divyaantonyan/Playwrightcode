// Extracting Substrings
//slice used to extract a part of the string and return it as a new string, 
// without modifying the original string. It takes two parameters: 
// the starting index and the ending index (optional). If the ending index is not provided, it extracts till the end of the string. Negative indexes can be used to count from the end of the string.

let str = "Login_Test_Pass_001";

// slice (start, end) — negative indexes supported
console.log(str.slice(0, 5)); // (0,4) -> "Login"
console.log(str.slice(11));//if we give one we will get the
                        //  rest of the string from that index -> "Pass_001"    
console.log(str.slice(-3));
//if we give negative it will start from the end of the string and give us the substring -> "001"
let testNumber = str.slice(-3);
console.log(testNumber); // "001"

// substring(start, end) — no negatives (treats as 0)
str.substring(6, 10); 
console.log(str.substring(6, 10)); // "Test"

// at() for single chars
str.at(0);   // "L"
console.log(str.at(0)); // "L"
str.at(-1);  // "1"
console.log(str.at(-1));  // "1"
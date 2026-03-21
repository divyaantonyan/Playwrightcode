// String Conversion


// To string
(200).toString(); 
console.log((200).toString()); // "200"
true.toString();  // "true"
console.log(true.toString());  // "true"

Number("42");  //  42
console.log(Number("42"));  //  42
Number("3.14"); // 3.14
console.log(Number("3.14")); // 3.14
Number("abc");  // NaN (Not a Number)
console.log(Number("abc"));  // NaN (Not a Number)
parseInt("42px");  // 42
console.log(parseInt("42px"));  // 42
parseFloat("3.14rem"); //3.14
console.log(parseFloat("3.14rem")); //3.14
//Immutable nature of strings
//Immutable means that once a string is created, it cannot be changed. Any operation 
// -that seems to modify a string actually creates a new string.

let str = "hello"; //. Things are immutable in nature in Java. 
str[0] = "H";
console.log(str);
console.log(str);

let upper = str.toUpperCase();
console.log(str);
console.log(upper); 